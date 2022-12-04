import { getPage } from '../lib/data'
import ContentLoop from '../components/loop'


export default async function Page({params}) {
  const page = await getPage(params.slug);
  
  return (
    <ContentLoop page={page} />
  )
}
