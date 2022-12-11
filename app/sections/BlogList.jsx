import { getPosts } from '../lib/data'
import Image from 'next/image';
import Link from 'next/link';

// it should be a css.module file but there is a bug when using dynamic import
import '../css//BlogList.css';

const BlogList = async () => {
  const posts = await getPosts()
  return (
    <section className='blog p-4 md:py-16 bg-gray-100'>
    <div className="container mx-auto">
      <div className="text-center mx-auto">
        <h2 className='mb-8 text-3xl md:text-6xl text-blue-800'>Blog Example</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
        {
          posts.map((post, i) => {
            return (
              <div key={i}>
                <h3 className="text-3xl text-red-800 mb-4">{post.title}</h3>
                <Link className="block" href={"/blog/"+post.slug}>
                  <Image
                    className="aspect-square rounded-full object-cover block mb-4"
                    src={require(`../../public/${post.thumbnail}`)}
                    alt="Home Header"
                  />
                </Link>
                <p className="mb-4">{post.intro}</p>
                <p><Link href={'/blog/'+post.slug} className="button">Read more &gt;</Link></p>
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