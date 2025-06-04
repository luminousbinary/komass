import type { PostData } from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";



export default function Post({ post }: { post: PostData }) {
  return (
    <Link href={`/feed/${post.id}`} className="no-underline">


      <div
        key={post.id}
        className="border rounded-xl shadow-sm p-4 flex gap-4 items-start
        transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
      >
        <Image src={"/default_logo.png"}
          alt={post.title}
          width={80}
          height={40}
          className="rounded justify-center items-center mb-6"
        />
        <div>
          <h2 className="text-xl font-semibold">
            <span className="relative group text-lg font-semibold text-gray-800 cursor-pointer">
              {post.title}
              <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-blue-500 transition-all duration-500 group-hover:left-0 group-hover:w-full" />
            </span></h2>
          <p className="text-gray-600 text-sm mb-1">
            By {post.author.name} • {new Date(post.createdAt).toDateString()}
          </p>

          <p className="text-gray-800 
              transition-all duration-700 ease-in-out
    dark:text-gray-100
    hover:text-white-500 dark:hover:text-blue-400
    hover:drop-shadow-[0_0_6px_#3b82f6] dark:hover:drop-shadow-[0_0_6px_#60a5fa]">
            {post.content && post.content.length > 100
              ? post.content.slice(0, 100) + "..."
              : post.content || ""}
          </p>
        </div>
      </div>

    </Link>
  );
}

