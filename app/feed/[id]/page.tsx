
"use client";

import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';
import { PostComponent } from "@/components/block/postPage";



export default function PostPage() {
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    console.log(params);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <PostComponent />
    );

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