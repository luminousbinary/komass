
"use client";
import { useState, useEffect } from "react";
import { PostComponent } from "@/components/block/postPage";

export default function PostPage() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return( <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-medium">Loading...</p>
        </div>) 
    }

    return (
        <PostComponent />
    );

}
