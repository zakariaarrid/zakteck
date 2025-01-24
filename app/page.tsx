import { allPosts } from "@/.contentlayer/generated"
import { Description } from "@/components/description"
import Link from "next/link"
import { format } from 'date-fns';


export default function Home() {
  // Sort posts by date (descending order)
  const sortedPosts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


  return (
    <div className="prose dark:prose-invert">
      <div className="pt-6">
       <Description />
      </div>   
      <h2>Pinned Posts </h2> 
      {sortedPosts
      .map((post) => {  
          if (post.pin) {
            return (
              <article key={post._id}>
                <p className="mb-0 text-sm font-bold text-gray-500">
                  {format(new Date(post.date), 'MMM dd, yyyy')}
                </p>
                <Link href={post.slug}>
                  <h4 className="mt-0">{post.title}</h4>
                </Link>
              </article>
            );
          } 
    })}
      <h2>Posts</h2>       
      {sortedPosts
      .map((post) => {  
      //console.log(post.show);
      if (post.show) {
        return (
          <article key={post._id}>
            <p className="mb-0 text-sm font-bold text-gray-500">
              {format(new Date(post.date), 'MMM dd, yyyy')}
            </p>
            <Link href={post.slug}>
              <h4 className="mt-0">{post.title}</h4>
            </Link>
          </article>
        );
      } 
})}
    </div>
  )
}
