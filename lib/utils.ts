import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const demoFeed = [
    {
        id: "1",
        title: "Exploring Tailwind CSS in Modern Development",
        content: "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency. Learn how to integrate it with your projects for better workflows.",
        createdAt: "2024-04-17",
        author: {
            name: "Sarah Thompson"
        }
    },
    {
        id: "2",
        title: "Why TypeScript is Taking Over",
        content: "TypeScript’s static typing reduces bugs, improves editor support, and scales large codebases. It’s widely adopted by companies seeking safer, cleaner JavaScript development practices.",
        createdAt: "2023-10-11",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "3",
        title: "Serverless API with Next.js & Vercel",
        content: "Serverless APIs reduce backend maintenance. With Next.js and Vercel, deployment is easy, cost-effective, and scalable. Explore how to build endpoints using API routes.",
        createdAt: "2025-01-20",
        author: {
            name: "Emily Chen"
        }
    },
    {
        id: "4",
        title: "Using Zustand for State Management",
        content: "Zustand offers minimal, boilerplate-free state management for React. It’s perfect for small to medium projects and works without context providers or reducers.",
        createdAt: "2023-06-28",
        author: {
            name: "Michael Reyes"
        }
    },
    {
        id: "5",
        title: "Why GraphQL Beats REST for Flexibility",
        content: "GraphQL provides precise data fetching, improving performance and reducing over-fetching. It’s ideal for modern apps needing efficient, flexible APIs.",
        createdAt: "2024-07-14",
        author: {
            name: "Fatima Noor"
        }
    },
    {
        id: "6",
        title: "Understanding React Server Components",
        content: "React Server Components allow server-rendered logic and streaming for faster performance and smaller client bundles. Great for modern SSR apps.",
        createdAt: "2023-12-02",
        author: {
            name: "Nikolas Burk"
        }
    },
    {
        id: "7",
        title: "Debugging with Chrome DevTools",
        content: "Chrome DevTools is essential for debugging. Use breakpoints, the console, and network tools to analyze issues and enhance your development workflow. Learn the key tabs and shortcuts.",
        createdAt: "2024-09-03",
        author: {
            name: "Michael Reyes"
        }
    },
    {
        id: "8",
        title: "Getting Started with tRPC and Next.js",
        content: "tRPC brings end-to-end type safety between your frontend and backend. With zero boilerplate, you can build typesafe APIs in Next.js effortlessly.",
        createdAt: "2024-01-30",
        author: {
            name: "Fatima Noor"
        }
    },
    {
        id: "9",
        title: "Building Accessible React Apps",
        content: "Accessibility in React ensures inclusivity. Use semantic HTML, ARIA roles, and test with screen readers. Accessible design is good design.",
        createdAt: "2023-08-16",
        author: {
            name: "Sarah Thompson"
        }
    },
    {
        id: "10",
        title: "Understanding Edge Functions",
        content: "Edge functions execute closer to users, improving response time. Great for auth, geolocation, and personalization. Explore how to use them in Next.js and Vercel.",
        createdAt: "2025-03-05",
        author: {
            name: "Emily Chen"
        }
    },
    {
        id: "11",
        title: "Improving Performance with Image Optimization",
        content: "Optimized images improve page speed. Use modern formats like WebP and lazy loading. Next.js Image component simplifies this with built-in optimization.",
        createdAt: "2024-02-19",
        author: {
            name: "Nikolas Burk"
        }
    },
    {
        id: "12",
        title: "Deploying Fullstack Apps with Railway",
        content: "Railway lets you deploy fullstack apps with databases in minutes. It’s developer-friendly and scalable. Great for prototyping and production-ready apps.",
        createdAt: "2023-05-22",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "13",
        title: "Animating UI with Framer Motion",
        content: "Framer Motion makes animations in React simple and smooth. Animate components on mount, hover, or drag. Use layout animations for fluid transitions.",
        createdAt: "2024-08-11",
        author: {
            name: "Sarah Thompson"
        }
    },
    {
        id: "14",
        title: "Mastering Git for Teams",
        content: "Collaborating with Git requires good branching strategy and communication. Use pull requests, reviews, and commit messages effectively. Avoid merge conflicts with best practices.",
        createdAt: "2023-11-07",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "15",
        title: "Auth with NextAuth.js Made Easy",
        content: "NextAuth.js simplifies adding OAuth, email, and custom login in Next.js. It's flexible and works with serverless functions and databases.",
        createdAt: "2024-03-10",
        author: {
            name: "Emily Chen"
        }
    },
    {
        id: "16",
        title: "Effective Code Review Techniques",
        content: "Code reviews should focus on logic, clarity, and maintainability. Be constructive, suggest improvements, and communicate clearly. Tools like GitHub make collaboration easier.",
        createdAt: "2023-09-21",
        author: {
            name: "Michael Reyes"
        }
    },
    {
        id: "17",
        title: "How to Use React Query Efficiently",
        content: "React Query handles fetching, caching, and updating server data in React apps. Learn how to manage query keys, pagination, and background refetching effectively.",
        createdAt: "2024-12-26",
        author: {
            name: "Fatima Noor"
        }
    },
    {
        id: "18",
        title: "Top 5 VS Code Extensions for Developers",
        content: "VS Code extensions boost productivity. Try Prettier, ESLint, GitLens, Live Server, and TabNine. Customize your workspace for faster development.",
        createdAt: "2023-07-03",
        author: {
            name: "Nikolas Burk"
        }
    },
    {
        id: "19",
        title: "Building Monorepos with Turborepo",
        content: "Turborepo makes managing monorepos easy. Share config, cache builds, and speed up CI. Use it with Next.js, TypeScript, and more.",
        createdAt: "2024-10-18",
        author: {
            name: "Sarah Thompson"
        }
    },
    {
        id: "20",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2232320",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2689090",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2198720",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2954320",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "22636830",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2635420",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "23987630",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },


    {
        id: "2129898730",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "221231210",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "222120",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2210930",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "378320",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "223280",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "203409",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "23110",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "22120",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2333420",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2560",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "237340",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2840",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2074",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2090",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "23210",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "223230",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2230",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2036",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2064",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2045",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "205",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "220",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "2034",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "202",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },
    {
        id: "230",
        title: "Introduction to Bun: The JavaScript Runtime",
        content: "Bun is a fast JavaScript runtime. It’s a drop-in replacement for Node.js with built-in bundler, transpiler, and npm client. Try it for speed.",
        createdAt: "2025-04-08",
        author: {
            name: "Liam O'Connor"
        }
    },


];

export async function getPostById(id: string) {
//   await new Promise((res) => setTimeout(res, 1000)) // Simulate network delay
  return demoFeed.find((item) => item.id === id) || null
}
export async function getAllPost() {
    // await new Promise((res) => setTimeout(res, 1000)) // Simulate network delay
    return demoFeed;
  
}