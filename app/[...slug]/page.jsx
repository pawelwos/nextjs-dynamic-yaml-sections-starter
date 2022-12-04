import { getData } from '../lib/data'
import ContentLoop from '../components/loop'


export default async function Page({params}) {
  const page = await getData(params.slug);
  
  return (
    <ContentLoop page={page} />
  )
}
