const Simple = ({section}) => {
  return (
    <section className="simple">
      <div className="container mx-auto">
        <div dangerouslySetInnerHTML={{__html: section.content}}></div>
      </div>
    </section>
  )
}
export default Simple