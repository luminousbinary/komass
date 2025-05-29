
import Link from "next/link";


export type Post = {
  id: string;
  title: string;
  author: {
    name: string;
  }
  content: string;
  createdAt: string;
};

export default function Post({ post }: { post: Post }) {

  return (
    <Link href={`/feed/${post.id}`} className="no-underline">
    <div  className="post-card p-3 text-black">
      <h2>{post.title}</h2>
      <div className="flex">
        <h4>By {post.author.name}</h4>
        <h4>| {post.createdAt}</h4>
      </div>
      <p > {post.content} </p>
    </div>
    </Link> 
  );
}
