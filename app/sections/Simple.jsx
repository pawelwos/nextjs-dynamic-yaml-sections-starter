// it should be a css.module file but there is a bug when using dynamic import
import '../css//Simple.css';

const Simple = ({section}) => {
  return (
    <section className="simple p-4 sm:py-8 md:py-16">
      <div className="container mx-auto">
        <div className="mx-auto" dangerouslySetInnerHTML={{__html: section.content}}></div>
      </div>
    </section>
  )
}
export default Simple