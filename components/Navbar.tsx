"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
        
    const [showModal, setShowModal] = useState(false);

    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-lg font-bold">
                    <Link href="/feed">
                        KOMASS
                    </Link>
                </div>
                <div className="flex space-x-4">
                  
                </div>

                <div className="flex items-center">
                    <button
                        onClick={() => document.documentElement.classList.toggle('dark')}
                        className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
                    >
                        Toggle Theme
                    </button>
                </div>
            </div>
            
        </nav>
    );
};

export default Navbar;