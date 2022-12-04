import { getPage } from './lib/data'
import ContentLoop from './components/loop'

export default async function Home() {
  const page = await getPage();
  
  return (
    <ContentLoop page={page} />
  )
}
