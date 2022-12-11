import { getPosts } from '../lib/data'

import Link from 'next/link';

// it should be a css.module file but there is a bug when using dynamic import
import '../css//BlogList.css';

const BlogList = async () => {
  const posts = await getPosts()
  return (
    <section className='blog p-4 md:py-16 bg-gray-100'>
    <div className="container mx-auto">
      <div className="text-center mx-auto">
        <h2 className='mb-4 text-3xl md:text-6xl'>Blog</h2>
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
      </div>
    </div>
    </section>
  )
}
export default BlogList