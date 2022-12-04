import { getPage } from '../../lib/data'
import ContentLoop from '../../components/loop'

export default async function Page({params}) {
  const page = await getPage(params.slug, 'posts');
  
  return (
    <ContentLoop page={page} />
  )
}
