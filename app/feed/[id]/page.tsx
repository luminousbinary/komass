// app/feed/[id]/page.tsx
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPostById } from '@/lib/utils'

type FeedPostProps = {
    params: { id: string }
};

// export async function generateMetadata({ params }: FeedPostProps) {
//     const data = await getPostById(params.id)

//     if (!data) return {}

//     return {
//         title: data.title,
//         description: data.content,
//         // openGraph: {
//         //     title: data.title,
//         //     description: data.content,
//         //     // images: [{ url: data.thumbnail }]
//         // }
//     }
// }

export default async function PostPage({ params }: FeedPostProps) {
    const data = await getPostById(params.id)

    if (!data) return notFound()

    return (
        <div className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            <p className="text-sm text-gray-500 mb-2">
                By {data.author.name} · {new Date(data.createdAt).toLocaleDateString()}
            </p>
            <Image
                src={"/default_logo.png" }
                alt={data.title}
                width={800}
                height={400}
                className="rounded mb-6"
            />
            <p className="text-lg">{data.content}</p>
        </div>
    )
}
