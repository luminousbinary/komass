
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPostById } from '@/lib/utils'
// import { useEffect, useState } from 'react';

type FeedPostProps = {
    params: { id: string }
};

export async function generateMetadata({ params }: FeedPostProps) {
    const data = await getPostById(params.id);

    if (!data) return {
        title: "Post Not Found",
        description: "The requested post could not be found."
    };

    return {
        title: data.title,
        description: data.content.slice(0, 150), // Limit description to 150 characters
        openGraph: {
            title: data.title,
            description: data.content.slice(0, 150),
            images: [{ url: "/default_logo.png" }]
        }
    };
}

export default async function PostPage({ params }: FeedPostProps) {

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setLoading(true);
    //     const MIN_TIME = 3000; // 3 seconds
    //     const startTime = Date.now();
    //     setTimeout(() => {

    //     }, MIN_TIME);
    //     const elapsed = Date.now() - startTime;
    //     if (elapsed < MIN_TIME) {
    //         setTimeout(() => setLoading(false), MIN_TIME - elapsed);
    //     } else {
    //         setLoading(false);
    //     }}, [params.id])

    const data = await getPostById(params.id)

    if (!data) return notFound()

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-sm text-gray-500 mb-2">
                By {data.author.name} · {new Date(data.createdAt).toLocaleDateString()}
            </p>
            <Image
                src={"/default_logo.png"}
                alt={data.title}
                width={800}
                height={400}
                className="rounded mb-6"
            />
            <p className="text-lg">{data.content}</p>
        </div>
    )
}

export function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-medium">Loading...</p>
        </div>
    );
}

export function Error({ message }: { message: string }) {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-medium text-red-500">{message}</p>
        </div>
    );
}