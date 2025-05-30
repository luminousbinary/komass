
import { useState, useEffect } from "react";
import { useParams } from 'next/navigation';

import Image from 'next/image'
import { getPostById } from '@/lib/utils'
import { useRouter } from 'next/navigation';
import { Metadata, PostData } from "@/lib/interface";




export function PostComponent() {

    const [postData, setPostData] = useState<PostData | null>(null);
    const [metadata, setMetadata] = useState<Metadata | null>(null);
    const [error, setError] = useState<string | null>(null);
    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        async function fetchPostData() {
            try {
                const id = Array.isArray(params.id) ? params.id[0] : params.id;
                const data = id ? await getPostById(id) : null;

                if (!data) {
                    setError("Post Not Found");
                    return;
                }

                setPostData(data);

                setMetadata({
                    title: data.title,
                    description: data.content.slice(0, 150), // Limit description to 150 characters
                    openGraph: {
                        title: data.title,
                        description: data.content.slice(0, 150),
                        images: [{ url: "/default_logo.png" }]
                    }
                });
            } catch (err) {
                setError("An error occurred while fetching the post.");
                console.log(err);
            }
        }

        fetchPostData();
    }, [metadata, params.id]);

    if (error) {
        return <Error message={error} />;
    }

    if (!postData) {
        return <Loading />;
    }

    return (
        <>


            <div className="max-w-3xl mx-auto py-10 px-4">

                <button
                    onClick={() => router.back()}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Back
                </button>
                <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
                <p className="text-sm text-gray-500 mb-2">
                    By {postData.author.name} · {new Date(postData.createdAt).toLocaleDateString()}
                </p>
                <Image
                    src={"/default_logo.png"}
                    alt={postData.title}
                    width={800}
                    height={400}
                    className="rounded mb-6"
                />
                <p className="text-lg">{postData.content}</p>
            </div>
        </>
    );
}


export function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-lg font-medium ">Loading...</p>
        </div>
    );
}

export function Error({ message }: { message: string }) {
    return (
        <div className="flex  flex-col justify-center items-center h-screen">
            <p className="text-lg font-medium text-red-500">
                <strong> 404 Page not found </strong> | 
                {message}</p>
                <button
                    // onClick={() => router.back()}
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Back
                </button>
        </div>
    );
}