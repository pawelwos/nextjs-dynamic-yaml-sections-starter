import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./Header'), {
  suspense: true,
})
const Simple = dynamic(() => import('./Simple'), {
  suspense: true,
})
const Sections = {
  'header': Header,
  'simple': Simple
}
export default Sections