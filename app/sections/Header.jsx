import Image from 'next/image';
// it should be a css.module file but there is a bug when using dynamic import
import '../css//Header.css';

const Header = ({section}) => {
  return (
    <section className="header relative">
        {
          section.bgimg && (
            <>
            <Image 
              className='absolute w-full h-full inset-0 object-cover z-0'
              src={require(`../../public/${section.bgimg}`)}
              alt="Home Header"
            />
            <div className="absolute inset-0 bg-slate-600 bg-opacity-60"></div>
            </>
          )
        }
      <div className="container relative z-20 mx-auto">
        <div className='mx-auto text-white py-24 px-4 md:p-32 text-center' dangerouslySetInnerHTML={{__html: section.content}}></div>
      </div>
    </section>
  )
}
export default Header