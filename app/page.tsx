import { allPosts } from "@/.contentlayer/generated"
import { Description } from "@/components/description"
import Link from "next/link"
import { format } from 'date-fns';


export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <div className="pt-6">
       <Description />
      </div>   
      <h2>Posts</h2>   
      {allPosts.map((post) => (
        <article key={post._id}>
          <p className="mb-0 text-sm font-bold text-gray-500">{format(new Date(post.date), 'MMM dd, yyyy')}</p>
          <Link href={post.slug}>
            <h2 className="mt-0">{post.title}</h2>
          </Link>
        </article>
      ))}
    </div>
  )
}
