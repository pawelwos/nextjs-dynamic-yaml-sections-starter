import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), {
  suspense: true,
  ssr: false
})
const Simple = dynamic(() => import('./Simple'), {
  suspense: true,
  ssr: false
})
const BlogList = dynamic(() => import('./BlogList'), {
  suspense: true,
  ssr: false
})
const Sections = {
  'header': Header,
  'simple': Simple,
  'blog-list': BlogList
}
export default Sections