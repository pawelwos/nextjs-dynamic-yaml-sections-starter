const Header = ({section}) => {
  return (
    <section className="header">
      <div className="container mx-auto">
        <div dangerouslySetInnerHTML={{__html: section.content}}></div>
      </div>
    </section>
  )
}
export default Header