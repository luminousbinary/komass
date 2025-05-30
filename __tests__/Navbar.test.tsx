// __tests__/Navbar.test.tsx

import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom';
import React from 'react';

describe('Navbar Component', () => {
  beforeEach(() => {
    // Reset HTML class before each test
    document.documentElement.classList.remove('dark');
    document.body.innerHTML = ''; // Clear previous DOM
  });

  it('renders the navbar with KOMASS title and Toggle Theme button', () => {
    render(React.createElement(Navbar));

    // Check if the site title is rendered
    const logoLink = screen.getByText(/KOMASS/i);
    expect(logoLink).toBeInTheDocument();

    // Check if the link points to /feed
    expect(logoLink.closest('a')).toHaveAttribute('href', '/feed');

    // Check if the Toggle Theme button is rendered
    const toggleButton = screen.getByRole('button', { name: /Toggle Theme/i });
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles the dark mode class on html element when button is clicked', () => {
    render(<Navbar />);

    const toggleButton = screen.getByRole('button', { name: /Toggle Theme/i });

    // Before click: no 'dark' class
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Click the button
    toggleButton.click();

    // After click: 'dark' class should be added
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    // Click again to remove
    toggleButton.click();
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});


