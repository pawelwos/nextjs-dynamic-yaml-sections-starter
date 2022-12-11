import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), {
  suspense: true
})
const Simple = dynamic(() => import('./Simple'), {
  suspense: true
})
const BlogList = dynamic(() => import('./BlogList'), {
  suspense: true
})
const TwoCols = dynamic(() => import('./TwoCols'), {
  suspense: true
})
const Sections = {
  'header': Header,
  'simple': Simple,
  'blog-list': BlogList,
  'twocols': TwoCols
}
export default Sections