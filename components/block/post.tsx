import type { PostData} from "@/lib/interface";
import Image from "next/image";
import Link from "next/link";



export default function Post({ post }: { post: PostData }) {
  return (
    <Link href={`/feed/${post.id}`} className="no-underline">


      <div
        key={post.id}
        className="border rounded-xl shadow-sm p-4 flex gap-4 items-start"
      >
        <Image src={"/default_logo.png"}
          alt={post.title}
          width={80}
          height={40}
          className="rounded justify-center items-center mb-6"
        />
        <div>
          <h2 className="text-xl font-semibold">{post.title}</h2>
          <p className="text-gray-600 text-sm mb-1">
            By {post.author.name} • {new Date(post.createdAt).toDateString()}
          </p>
          <p className="text-gray-800">
            {post.content && post.content.length > 100
              ? post.content.slice(0, 100) + "..."
              : post.content || ""}
          </p>
        </div>
      </div>

    </Link>
  );
}
