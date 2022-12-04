import { getPosts } from '../lib/data'
import Link from 'next/link';


const BlogList = async () => {
  const posts = await getPosts()
  return (
    <>
    <h2 className='mb-4'>Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    { 
      posts.map((post, i) => {
        return (
          <div key={i}>
            <h3>{post.title}</h3>
            <p>{post.intro}</p>
            <p><Link href={'/blog/'+post.slug} className="underline text-blue-900">Read more &gt;</Link></p>
          </div>
        )
      }) 
    }
    </div>
    </>
  )
}
export default BlogList