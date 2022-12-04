import { getData } from './lib/data'
import ContentLoop from './components/loop'

export default async function Home() {
  const page = await getData();
  
  return (
    <ContentLoop page={page} />
  )
}
