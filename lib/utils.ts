import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const demoFeed = [
    {
        "id": "d17ce467-e190-4c53-b9b9-0d4dd4d3a7cb",
        "title": "Writing Better APIs with NestJS",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-12-09",
        "category": "Design",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "d1100bc4-e68c-4d50-be25-fc8ca2c4d660",
        "title": "Improving UI Performance with Memoization",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2024-03-02",
        "category": "Frontend",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "9e7bc561-48a5-4067-856e-38ac87316389",
        "title": "Next.js 15 New Features Overview",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-10-06",
        "category": "AI",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "4ee2e8fe-0fa1-4559-a4b0-54c49dea2d40",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2024-02-26",
        "category": "AI",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "54d2791c-d369-495d-bce3-51c8537ac31f",
        "title": "Mastering TypeScript Utility Types",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-01-23",
        "category": "DevOps",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "ac484d56-ff32-4133-a32a-09e8a4fba022",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2024-01-28",
        "category": "DevOps",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "716fe7ee-78df-4dc3-b9ff-693a779ebe0f",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-06-28",
        "category": "Next.js",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "2ba8d83d-cff7-4ed8-9b9d-b4233238ec46",
        "title": "Improving UI Performance with Memoization",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-06-08",
        "category": "React",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "ab2a0b77-8485-415e-861d-5eff30c28afa",
        "title": "Mastering TypeScript Utility Types",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-07-27",
        "category": "Next.js",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "2b8fb126-08c6-44b6-a974-55d9e2a9fedc",
        "title": "Scaling Applications with Micro Frontends",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2024-04-25",
        "category": "Frontend",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "289bc58d-2fa9-4db6-8006-babe8c161594",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-01-27",
        "category": "Design",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "c8258792-6f1c-4295-891d-2234142bf389",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-10-25",
        "category": "Design",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "e3060a6e-c8a7-436a-9dea-24c6661a3e39",
        "title": "Improving UI Performance with Memoization",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-06-23",
        "category": "Backend",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "4446c260-8246-487d-9299-433a9823f601",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-05-12",
        "category": "Design",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "f0098fa1-ef05-4ab3-9e3c-9ef4f021a92e",
        "title": "Next.js 15 New Features Overview",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-10-08",
        "category": "AI",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "490ae4d3-7233-4113-b032-0489acab11d5",
        "title": "Understanding React Server Components",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-04-27",
        "category": "NestJS",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "0f54fbaa-7c76-4fad-9b13-321016f6f493",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2024-04-11",
        "category": "Frontend",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "e85c5593-7d1b-40e6-8e68-f4ba3492333a",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-08-29",
        "category": "DevOps",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "e7191e6c-dc9e-4e4c-9cd3-543eabce2516",
        "title": "Understanding React Server Components",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-09-28",
        "category": "React",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "bd6558b6-4381-41c1-9463-a0db7d7d667f",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-03-12",
        "category": "Design",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "01a87db1-a53b-45cb-aecb-813a68045d1a",
        "title": "Understanding React Server Components",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-10-26",
        "category": "Next.js",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "6fda9762-dc19-493c-9ea4-5de943e7c037",
        "title": "Next.js 15 New Features Overview",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-05-01",
        "category": "TypeScript",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "46e7970a-6cc7-4543-bece-da873873f637",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-09-15",
        "category": "DevOps",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "96fca4d7-a686-4b41-b2f2-daa4f81a1e68",
        "title": "Understanding React Server Components",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-05-05",
        "category": "AI",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "d4b32647-a276-41c1-824d-a91c1c18bc95",
        "title": "Mastering TypeScript Utility Types",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-05-10",
        "category": "AI",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "afb506c1-ab30-41b2-901a-d507acc07457",
        "title": "Writing Better APIs with NestJS",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-03-28",
        "category": "React",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "40a00259-3df3-426b-8b9d-d3cd59a9bb06",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2024-05-15",
        "category": "Next.js",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "b85320dd-282f-4929-a1ae-1b8a6a53bf10",
        "title": "Mastering TypeScript Utility Types",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-07-26",
        "category": "DevOps",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "78a94138-9687-4af4-a597-c31d2cc67843",
        "title": "Understanding React Server Components",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-12-06",
        "category": "Backend",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "32f69085-5dc5-446a-a196-e16512f9480d",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-03-18",
        "category": "AI",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "62fb098a-8795-42c8-be6a-75ecea3481c6",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2024-04-01",
        "category": "TypeScript",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "0bad06ee-65b4-41d2-abe3-450d39f3dfd8",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-12-03",
        "category": "Frontend",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "40a5024e-5874-4a7a-86e8-97d313698955",
        "title": "Mastering TypeScript Utility Types",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-12-24",
        "category": "Design",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "42688f48-fcd1-48da-9fdc-a471a031cc09",
        "title": "Mastering TypeScript Utility Types",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2024-03-23",
        "category": "NestJS",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "377fc34b-de07-412c-8ec0-9a36c6656edf",
        "title": "Next.js 15 New Features Overview",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-04-06",
        "category": "Next.js",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "86bc30ce-c7b1-49ab-b493-8a028587ee50",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-03-18",
        "category": "AI",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "52fcff75-cee2-4f02-9459-74d0cedb8b8a",
        "title": "Understanding React Server Components",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-11-10",
        "category": "DevOps",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "62029701-61c0-432a-a5c8-81fa1f8248e3",
        "title": "Writing Better APIs with NestJS",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-10-21",
        "category": "React",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "6f1966f0-db46-4ea6-9a1d-b2e1c8d81d77",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-02-18",
        "category": "Backend",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "d9538e65-9f28-40d7-be39-0986aa78c731",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-01-21",
        "category": "Github",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "3ba23fd4-000a-4d36-8871-b555191a15f5",
        "title": "Improving UI Performance with Memoization",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-01-20",
        "category": "AI",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "39f3ab4b-8e12-488c-ab69-f9b76c41db67",
        "title": "Mastering TypeScript Utility Types",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-09-26",
        "category": "TypeScript",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "cf5f8d3d-3f7d-4c77-b05c-b7c89724646b",
        "title": "Next.js 15 New Features Overview",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-02-21",
        "category": "Backend",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "12120b4a-fa59-481e-9773-cca12fb9e247",
        "title": "Scaling Applications with Micro Frontends",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-02-08",
        "category": "DevOps",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "5a348937-09ae-41c8-816c-f6e8bd0a968b",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-02-19",
        "category": "Frontend",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "de0d80d8-bb58-4401-b5dd-ae003fa9bf8d",
        "title": "Next.js 15 New Features Overview",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-01-01",
        "category": "NestJS",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "b793cbce-b57f-42ee-b150-bffc399e28d5",
        "title": "JavaScript Async Patterns Demystified",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-12-08",
        "category": "DevOps",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "25f0174a-5318-4b44-9e48-bd9c5e970c6d",
        "title": "Understanding React Server Components",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-12-05",
        "category": "Github",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "9ba07f10-63c0-496a-9844-cf43b382eef0",
        "title": "Writing Better APIs with NestJS",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-12-26",
        "category": "React",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "6103dc09-db82-4604-a689-621c58d766a4",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-09-14",
        "category": "AI",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "6157643e-aa72-4d27-9d93-4dba5db7691a",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-12-14",
        "category": "NestJS",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "8feec760-9b0e-4e1d-970f-2c843871b9c3",
        "title": "Mastering TypeScript Utility Types",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2024-04-20",
        "category": "Github",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "108c5ebc-a9a3-48bf-99e1-9c6678729be5",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2024-04-24",
        "category": "NestJS",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "70659bf9-fbed-438e-b0db-5d461e69e152",
        "title": "Mastering TypeScript Utility Types",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-11-21",
        "category": "DevOps",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "61cb867f-a5f8-4139-bbb6-52823b461265",
        "title": "Writing Better APIs with NestJS",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2024-03-18",
        "category": "Next.js",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "33d17848-1ae0-4c7b-a2aa-245e57f9940b",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2024-04-14",
        "category": "AI",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "3e7fc803-87fc-4972-b872-e92063bc3daa",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2024-04-27",
        "category": "DevOps",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "5e560a95-3e58-4d21-8d6f-ded653facc29",
        "title": "Writing Better APIs with NestJS",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2024-03-05",
        "category": "Github",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "eef59ba6-61fa-4b7e-8cd2-a17ebca236d3",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-11-20",
        "category": "DevOps",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "3b5b8040-c812-4a23-a42b-17d056ab94f0",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-04-29",
        "category": "DevOps",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "3cb6714b-f3a1-41d0-b690-066eba87f528",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2024-01-11",
        "category": "Next.js",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "dc0d346f-3db9-43ff-9169-d16aacc7e7dc",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-10-21",
        "category": "Next.js",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "ba806cc3-17aa-477e-90bc-b70442fc99f2",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-02-15",
        "category": "TypeScript",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "eff54cbd-1f71-4b2b-beb9-ab4bc2053cba",
        "title": "Next.js 15 New Features Overview",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-07-27",
        "category": "Frontend",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "ee0443f6-1b46-4493-9adb-9b007363cf0f",
        "title": "Next.js 15 New Features Overview",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-01-21",
        "category": "Backend",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "ff283c3e-81b2-404d-a410-96c6b128224a",
        "title": "Writing Better APIs with NestJS",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-04-25",
        "category": "React",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "0c35e9b2-71eb-4fbb-88a6-9a1c1a084d5f",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-03-14",
        "category": "TypeScript",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "2dc99e47-01d2-4b1d-b539-305ba6925ce5",
        "title": "Next.js 15 New Features Overview",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-03-16",
        "category": "DevOps",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "869dc972-5281-4049-896b-a58f3fd5a95d",
        "title": "Mastering TypeScript Utility Types",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-11-07",
        "category": "Backend",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "0bfc05a7-d1d3-4b81-8c1b-30ca42babc8f",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-03-08",
        "category": "DevOps",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "80f1c416-e42c-40d4-ab8c-04167b06e189",
        "title": "Mastering TypeScript Utility Types",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-05-22",
        "category": "Next.js",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "f04e4004-de00-4136-a07b-85df96accd0c",
        "title": "Understanding React Server Components",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-11-13",
        "category": "TypeScript",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "297a8db7-9de6-4f16-bcfe-25a8927aea0f",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-06-08",
        "category": "Github",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "e7647d64-162f-4fe8-8960-c63eadfc25df",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-04-14",
        "category": "Github",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "43444b3b-549b-4d01-82ae-7582267e92a5",
        "title": "Mastering TypeScript Utility Types",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-10-18",
        "category": "React",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "55e3ec35-32e2-482e-bb4b-658ef4a7f867",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2024-04-04",
        "category": "NestJS",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "f577cf9d-fa80-4c35-a4d8-2aba8b5c1433",
        "title": "Next.js 15 New Features Overview",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-03-15",
        "category": "Github",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "88ff1210-fde1-40fa-8ece-99d3106d636c",
        "title": "Next.js 15 New Features Overview",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-04-01",
        "category": "DevOps",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "e9003e18-7bdb-44f4-9e71-ed3986ceb089",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-05-31",
        "category": "DevOps",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "ebaf2d3a-e107-4ea4-ba45-8a1ee6ed6cea",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-09-25",
        "category": "Frontend",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "f6b521c5-62e7-4633-8d00-0de2012cbeea",
        "title": "Next.js 15 New Features Overview",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-03-26",
        "category": "Frontend",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "ed2afdc0-a61f-4cd7-845f-ed6ff4ac99c2",
        "title": "Writing Better APIs with NestJS",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-05-07",
        "category": "Backend",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "5d6966cf-795d-41d5-9571-304eb237426d",
        "title": "Scaling Applications with Micro Frontends",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-05-10",
        "category": "Design",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "0f9be760-491a-4e50-85dd-e3fc94b7aed6",
        "title": "Scaling Applications with Micro Frontends",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-01-30",
        "category": "Next.js",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "9aa423c5-26a0-49fa-95ed-598ebc90fd1b",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2024-03-03",
        "category": "TypeScript",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "ba134aab-51b2-4356-90d1-6b7a851c873b",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-04-27",
        "category": "Next.js",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "26153868-55c6-4269-b8db-bd1bdfe28a61",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2024-04-17",
        "category": "TypeScript",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "e3674dc1-8a5b-40e7-ab47-d81e8e0f935f",
        "title": "Writing Better APIs with NestJS",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-05-12",
        "category": "React",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "c1524923-0913-4d7c-afea-c10ca70a247d",
        "title": "Improving UI Performance with Memoization",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-10-31",
        "category": "Design",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "93f18091-0f84-411d-804b-40b28a8dd71a",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-03-05",
        "category": "TypeScript",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "4cc297a3-eda8-46c8-84cd-3ab9ac2a3c47",
        "title": "Next.js 15 New Features Overview",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-11-20",
        "category": "Next.js",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "a14772f1-572d-4586-bd24-32029713202d",
        "title": "Next.js 15 New Features Overview",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-08-04",
        "category": "Github",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "8f4ef1b1-90c5-4ce3-b0bb-1ca27f4d6842",
        "title": "Understanding React Server Components",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-09-24",
        "category": "Design",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "52e8cfb6-ae60-4b2e-b2b7-07a92883ab92",
        "title": "Improving UI Performance with Memoization",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-07-07",
        "category": "React",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "21ac8cdb-a8cf-45c5-8162-138c9d39403d",
        "title": "Understanding React Server Components",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-10-29",
        "category": "React",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "44b407b9-3720-4e77-964e-56198db4ffda",
        "title": "Next.js 15 New Features Overview",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-02-25",
        "category": "AI",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "32c0244a-efe3-416a-8a48-de8aae840dca",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-09-08",
        "category": "Github",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "7516678b-3810-4081-b48f-dc47c407eec4",
        "title": "JavaScript Async Patterns Demystified",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-08-12",
        "category": "NestJS",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "082de844-1855-432a-b6fa-3b49a420b6ab",
        "title": "Mastering TypeScript Utility Types",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-05-08",
        "category": "NestJS",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "2638df68-9eba-4115-bbdb-1e07d63a3d3d",
        "title": "Scaling Applications with Micro Frontends",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-06-20",
        "category": "NestJS",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "b2bcb0f3-727f-4d0f-b66a-bf3ea6cf2758",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-04-07",
        "category": "TypeScript",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "4cf5aad2-98ec-4607-9e28-4169b06a9f0e",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2024-05-07",
        "category": "DevOps",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "7ee6dcef-e3bf-4336-83d4-a18730a94821",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-09-13",
        "category": "Github",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "93da87be-a1c8-429f-8d3e-704aaa2fb110",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2024-03-07",
        "category": "DevOps",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "d62f7349-f4ae-4041-a66a-8c5d32bd3e85",
        "title": "Mastering TypeScript Utility Types",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2024-01-13",
        "category": "Frontend",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "01408d66-7576-41de-892d-d8e15a614ecf",
        "title": "Writing Better APIs with NestJS",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-07-16",
        "category": "Design",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "408a7908-91bc-4ae1-bbe5-7a71ea8300ee",
        "title": "Next.js 15 New Features Overview",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2024-04-27",
        "category": "React",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "4c7ce389-dcba-4752-b3d7-c8d99ea10a9a",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-12-19",
        "category": "NestJS",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "064fe6bb-35ae-47f3-a6b6-2167335848b8",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-04-04",
        "category": "DevOps",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "01cc5630-59df-44e7-814d-9064e63acf67",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-11-29",
        "category": "React",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "dcadb728-563b-4e5d-8b43-dd9b37e274a8",
        "title": "Understanding React Server Components",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-04-10",
        "category": "React",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "d0783dc0-fc1b-44ce-9345-ee7309146803",
        "title": "Writing Better APIs with NestJS",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-10-16",
        "category": "Frontend",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "11dd6c80-817d-47c0-86ac-2bcf26184f69",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-07-18",
        "category": "Frontend",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "403c5a2f-1383-4914-ab5f-0152a473b698",
        "title": "Understanding React Server Components",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-04-22",
        "category": "Next.js",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "19408195-e18d-4283-a5ba-438a094b10a9",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-09-02",
        "category": "Backend",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "a399b83e-ff1d-4df1-a37f-1844c147a6bf",
        "title": "Next.js 15 New Features Overview",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-11-16",
        "category": "Github",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "c721f508-85a2-4479-a6d5-08e94a1362a4",
        "title": "Improving UI Performance with Memoization",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-02-01",
        "category": "NestJS",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "34d6e132-a2c3-40fe-b4e6-dfc549af32bb",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-12-03",
        "category": "AI",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "ffbd28aa-ad99-4689-acd2-e0be76c75b9a",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2024-02-07",
        "category": "React",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "ebdb7a48-9a20-4138-8e47-f8b993841dc2",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2024-04-04",
        "category": "AI",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "f234a7ef-737a-400f-90d7-0e01e7fc93c4",
        "title": "Improving UI Performance with Memoization",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-04-07",
        "category": "Frontend",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "b935d885-3c0b-4fb6-b0cb-a4946cb59d03",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2024-05-02",
        "category": "Frontend",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "324b309e-02f1-4bb6-becf-53d5c088762f",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-03-27",
        "category": "TypeScript",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "f3121438-b312-41cb-9a1a-3c4d80437361",
        "title": "Mastering TypeScript Utility Types",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-12-20",
        "category": "TypeScript",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "9eb27e26-26c8-47ba-8191-a94ed83a1e19",
        "title": "Next.js 15 New Features Overview",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-03-09",
        "category": "AI",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "414a2cd5-4425-4220-8c17-d4fe1573e777",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-12-24",
        "category": "AI",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "b7f9c799-6c53-40fa-a29f-45e630006081",
        "title": "Mastering TypeScript Utility Types",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-03-11",
        "category": "NestJS",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "c84aa484-e240-4ebb-aebc-2120bacc9f66",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-01-24",
        "category": "TypeScript",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "077324ab-f7de-439a-b47e-feebf5289d73",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2024-02-20",
        "category": "TypeScript",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "4d426ff6-ce7c-4c8b-b6bc-ad9f0086427b",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-08-02",
        "category": "React",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "d9dc961b-93ed-45da-b0af-62f3c05492da",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-07-20",
        "category": "AI",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "f05b6bb1-f417-40c3-95bc-5f0084c60a55",
        "title": "Understanding React Server Components",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-04-20",
        "category": "Backend",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "d9f7b1cd-95d1-40d0-8bf8-ba6f37f15024",
        "title": "Writing Better APIs with NestJS",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2024-01-28",
        "category": "AI",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "d4a7b9eb-5302-4e3c-8654-84d13be175c3",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-06-08",
        "category": "AI",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "6090f9bb-984d-4c29-8154-3da557cf8c46",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-04-19",
        "category": "Design",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "eead4c94-de35-4800-931e-ae09107d2ece",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2024-03-31",
        "category": "Next.js",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "81daf59e-42e9-4b9d-8bec-3a87442492f3",
        "title": "Writing Better APIs with NestJS",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-04-06",
        "category": "React",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "d993f367-ddb9-43ab-b40e-2102799a5a2a",
        "title": "Improving UI Performance with Memoization",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-06-24",
        "category": "Github",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "e393c572-bde3-40c1-98fa-bcdcff3673da",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-03-10",
        "category": "React",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "66d5d4be-c432-493f-aee6-f391dca22539",
        "title": "Improving UI Performance with Memoization",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-01-31",
        "category": "TypeScript",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "eb951b2a-0f78-401e-8b02-5400fef1e80f",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-09-27",
        "category": "Backend",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "6c3caa6f-ce1d-4459-80a5-2355865b85b2",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-08-31",
        "category": "AI",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "63e0ca62-f9d1-4ce8-bee8-994ab345d668",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2023-11-06",
        "category": "TypeScript",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "f199a52c-2677-4745-9e73-2c2551ee06ea",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-02-12",
        "category": "TypeScript",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "bfa0c8fe-5ffe-4b35-955d-c3491a7a4d55",
        "title": "JavaScript Async Patterns Demystified",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-10-28",
        "category": "AI",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "136ea9b5-3c62-49ed-bcea-f5554811ba37",
        "title": "Next.js 15 New Features Overview",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2024-01-02",
        "category": "Frontend",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "77e1f741-a5c0-469a-aac3-fe005451b38c",
        "title": "Writing Better APIs with NestJS",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2024-02-25",
        "category": "Next.js",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "7ffcb299-14f7-4a62-9700-0266a88c549d",
        "title": "Improving UI Performance with Memoization",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2024-02-20",
        "category": "React",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "acf3215b-c4c4-4bc0-ba2e-dfa91efd4c68",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-03-21",
        "category": "TypeScript",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "c362c6fa-b16e-4c0f-b91c-bad15538d36c",
        "title": "Mastering TypeScript Utility Types",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2024-04-24",
        "category": "Frontend",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "2b3ba98f-7986-4e98-8f98-f0ecedf55ade",
        "title": "Mastering TypeScript Utility Types",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-01-15",
        "category": "TypeScript",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "75e5ac92-298c-49ff-9fcb-87ae14e97487",
        "title": "Improving UI Performance with Memoization",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-01-10",
        "category": "Backend",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "a29332d7-b182-4180-925b-147040db33c1",
        "title": "JavaScript Async Patterns Demystified",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2024-02-23",
        "category": "Design",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "4273a315-6936-4f6e-b34c-6da30852d65e",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-08-30",
        "category": "Github",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "f62ff0cc-a998-4bb3-84e3-a8c0534a3516",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2024-02-08",
        "category": "AI",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "b196af72-ff37-425e-8815-8b94a3e3a872",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2024-01-01",
        "category": "Github",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "456a4eb7-057c-4736-a1f9-5f15f16d95f0",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2024-03-30",
        "category": "Frontend",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "477e19f3-f6a3-4935-9d56-bb3bdec1ddc9",
        "title": "Improving UI Performance with Memoization",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-06-09",
        "category": "AI",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "e79abb51-2286-42a2-825d-8baff81dc42a",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-04-20",
        "category": "TypeScript",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "d5c3ab27-aad8-4fe1-8338-21d27307bc29",
        "title": "Writing Better APIs with NestJS",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-03-03",
        "category": "Github",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "18eeaf12-353b-4c84-81e1-5282d7d7f6d9",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-12-27",
        "category": "Github",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "acb96ca4-0610-4df8-9a8b-6e29ff9977b6",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2024-03-02",
        "category": "TypeScript",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "29cdfea4-4c41-481e-b61b-28bcfe962ee5",
        "title": "Improving UI Performance with Memoization",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-03-22",
        "category": "Frontend",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "501467ff-8df3-4b54-b52f-1de0cb958ec8",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2024-03-21",
        "category": "React",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "529562f7-fcf3-4afe-910a-da2f56ae591c",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-05-19",
        "category": "DevOps",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "59b37bfe-00f1-42cb-b29a-a3e34deb1574",
        "title": "Understanding React Server Components",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2024-04-27",
        "category": "TypeScript",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "3dff8b79-de02-4416-aafb-8f2fedc1e96c",
        "title": "Mastering TypeScript Utility Types",
        "content": "Next.js 15 introduces enhanced routing, better streaming capabilities, and first-class support for React Server Components.",
        "createdAt": "2023-11-04",
        "category": "AI",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "40c734b7-0a8e-4edd-8ed1-110ce4018df0",
        "title": "Next.js 15 New Features Overview",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-01-16",
        "category": "Github",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "563eb29f-2c01-49a4-b686-d582444acde2",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-03-04",
        "category": "AI",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "6c24bee7-22e2-4b2b-8c46-bd717bfb71d6",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-09-26",
        "category": "Backend",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "bd830d00-d555-4651-9749-ce86d8a02979",
        "title": "Next.js 15 New Features Overview",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-08-26",
        "category": "NestJS",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "26b3b681-72d4-4625-b58e-54cc92688f0e",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2024-04-25",
        "category": "Backend",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "66373482-295f-4a1d-9ecf-6b9e8d7b7ff0",
        "title": "Improving UI Performance with Memoization",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-06-24",
        "category": "Design",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "b6729b4c-6d80-4381-92f8-b6ea9bf3bbf3",
        "title": "Writing Better APIs with NestJS",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-09-02",
        "category": "Github",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "c0a09074-27be-4f5b-afe7-37bbce5127af",
        "title": "JavaScript Async Patterns Demystified",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-01-29",
        "category": "AI",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "6c7f580f-13b9-449a-bd9f-2aa718cd2c55",
        "title": "Mastering TypeScript Utility Types",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-03-17",
        "category": "Github",
        "author": {
            "name": "Sarah Thompson"
        }
    },
    {
        "id": "6a49795f-b250-45d1-9a95-cb261301becb",
        "title": "Writing Better APIs with NestJS",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-07-15",
        "category": "Github",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "bcb71cf2-3b12-47b0-b303-bf23903c3f0c",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-09-30",
        "category": "Backend",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "50a225b5-b04e-4b5f-934b-86872b6b6c57",
        "title": "GraphQL vs REST: Pros and Cons",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-01-07",
        "category": "Next.js",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "fef5d507-b177-487d-b42b-233a27f86553",
        "title": "Next.js 15 New Features Overview",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-10-13",
        "category": "Frontend",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "0afbd077-08aa-401c-a545-d76a91610a01",
        "title": "Writing Better APIs with NestJS",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2024-01-31",
        "category": "NestJS",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "1d740c69-b2cf-4d0b-88e6-75d666bc9d6b",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-09-27",
        "category": "Backend",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "df9ae31f-271c-4841-98f3-7d45b3019eed",
        "title": "Understanding React Server Components",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2024-04-13",
        "category": "AI",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "ca1108a0-b100-45c2-8cdf-ed1753f474fb",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-07-17",
        "category": "Design",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "856b3be5-c20f-4f7c-9f88-f8bc1f17895a",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-04-12",
        "category": "React",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "52f42c20-10ef-492d-a918-b819cdf8c348",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-06-07",
        "category": "React",
        "author": {
            "name": "Amina Yusuf"
        }
    },
    {
        "id": "7b6a1828-f958-4194-877b-ee3e22349a46",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Async/Await and Promises are essential in modern JS development. Understand their differences and when to use each pattern effectively.",
        "createdAt": "2023-03-16",
        "category": "NestJS",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "a089ecae-936f-46b6-9729-cac94be9aeb8",
        "title": "JavaScript Async Patterns Demystified",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-10-14",
        "category": "Backend",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "cdffb54b-173f-4996-82b0-0a350811d6d7",
        "title": "Understanding React Server Components",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2024-02-18",
        "category": "Backend",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "b2e03a60-bcf6-4c83-9271-a86445ec47cb",
        "title": "Writing Better APIs with NestJS",
        "content": "GraphQL and REST are two major API paradigms. Learn how to choose the right one based on your project's needs.",
        "createdAt": "2023-06-18",
        "category": "Backend",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "951e3ff9-f9b7-49aa-8f1d-2fecb5a4dbc7",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Tailwind CSS simplifies styling with utility-first classes. It speeds up development, offers customization, and improves design consistency.",
        "createdAt": "2024-03-13",
        "category": "React",
        "author": {
            "name": "David Omondi"
        }
    },
    {
        "id": "5618d72e-1dc1-4e7b-844a-f822b445ec40",
        "title": "JavaScript Async Patterns Demystified",
        "content": "NestJS provides a robust framework for building efficient and scalable server-side applications with TypeScript.",
        "createdAt": "2023-08-08",
        "category": "NestJS",
        "author": {
            "name": "Leon Chen"
        }
    },
    {
        "id": "a6548f94-0920-444f-98d9-a7bccdaaa0b3",
        "title": "Scaling Applications with Micro Frontends",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-09-19",
        "category": "AI",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "f78df0aa-f691-45e6-b13f-c0a8b2ae2a93",
        "title": "Improving UI Performance with Memoization",
        "content": "Micro frontends allow teams to scale frontend development by splitting large applications into smaller, independently deployable units.",
        "createdAt": "2023-07-29",
        "category": "DevOps",
        "author": {
            "name": "Linda Njeri"
        }
    },
    {
        "id": "a417efff-bd23-4ca9-9949-39cb81d78b73",
        "title": "Understanding React Server Components",
        "content": "React Server Components introduce a powerful way to optimize data fetching and UI rendering in React apps.",
        "createdAt": "2023-12-07",
        "category": "Next.js",
        "author": {
            "name": "James Clark"
        }
    },
    {
        "id": "ef6f14c0-9185-41eb-9f97-bdaca5aae37e",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Utility types in TypeScript like Partial, Pick, and Omit can help you write more expressive and safe code.",
        "createdAt": "2023-07-17",
        "category": "Github",
        "author": {
            "name": "Fatima Bello"
        }
    },
    {
        "id": "dd18e417-ded9-402f-b761-80d6c75d6980",
        "title": "Writing Better APIs with NestJS",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-10-18",
        "category": "Next.js",
        "author": {
            "name": "Carlos Mendes"
        }
    },
    {
        "id": "dd82e4ca-3a43-417b-b620-cfb039f9de6d",
        "title": "Exploring Tailwind CSS in Modern Development",
        "content": "Markdown with Next.js can help you build static content blogs efficiently, combining developer ergonomics with performance.",
        "createdAt": "2023-10-29",
        "category": "Github",
        "author": {
            "name": "Emily Zhang"
        }
    },
    {
        "id": "1c47ac48-02e2-45aa-bebb-31fbdf41cc6d",
        "title": "JavaScript Async Patterns Demystified",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-01-06",
        "category": "React",
        "author": {
            "name": "Jason White"
        }
    },
    {
        "id": "29669681-c4a2-46c2-9553-0b7f27fecdb1",
        "title": "Building a Blog with Markdown and Next.js",
        "content": "Memoization helps in preventing unnecessary renders in React. Learn how to use React.memo and useMemo efficiently.",
        "createdAt": "2023-04-30",
        "category": "AI",
        "author": {
            "name": "Fatima Bello"
        }
    }
]

export async function getPostById(id: string) {
//   await new Promise((res) => setTimeout(res, 1000)) // Simulate network delay
  return demoFeed.find((item) => item.id === id) || null
}
export async function getAllPost() {
    // await new Promise((res) => setTimeout(res, 1000)) // Simulate network delay
    return demoFeed;
  
}