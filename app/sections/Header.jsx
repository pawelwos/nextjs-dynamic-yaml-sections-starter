import Image from 'next/image';

const Header = ({section}) => {
  return (
    <section className="header p-4 relative">
      {
        section.bgimg && (
          <div className="absolute inset-0 object-cover z-0">
            <Image src={require(`../../public/${section.bgimg}`)}
              alt="Home Header"
            />
          </div>
        )
      }
      <div className="container mx-auto">
        <div dangerouslySetInnerHTML={{__html: section.content}}></div>
      </div>
    </section>
  )
}
export default Header