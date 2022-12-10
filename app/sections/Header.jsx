import Image from 'next/image';
import styles from './Header.module.css';

const Header = ({section}) => {
  return (
    <section className={styles.header}>
        {
          section.bgimg && (
            <Image 
              className='absolute w-full h-full inset-0 object-cover z-0'
              src={require(`../../public/${section.bgimg}`)}
              alt="Home Header"
            />
          )
        }
      <div className="container relative z-20 mx-auto">
        <div className='p-4 md:p-16 lg:p-24 text-center' dangerouslySetInnerHTML={{__html: section.content}}></div>
      </div>
    </section>
  )
}
export default Header