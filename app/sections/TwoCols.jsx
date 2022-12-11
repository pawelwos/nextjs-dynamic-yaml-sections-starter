import Image from 'next/image';
// it should be a css.module file but there is a bug when using dynamic import
import '../css/TwoCols.css'

const TwoCols = ({section}) => {
  return (
    <section className='twocols p-4 lg:py-16' style={{'backgroundColor': section.bgcolor}}>
      <div className="container mx-auto md:flex">
        <div className={"md:w-1/2 relative " + (section.imagePosition === 'right' ? 'md:order-2' : '')}>
        {
          section.image && (
            <>
            <Image 
              className='absolute w-full h-full inset-0 object-cover z-0'
              src={require(`../../public/${section.image}`)}
              alt="Home Header"
            />
            </>
          )
        }
        </div>
        <div className={"md:w-1/2 " + (section.imagePosition === 'right' ? 'md:order-1' : '')}>
        <div className="lg:max-w-[60%] mx-auto" dangerouslySetInnerHTML={{__html: section.content}}></div>
        </div>
      </div>
    </section>
  )
}

export default TwoCols