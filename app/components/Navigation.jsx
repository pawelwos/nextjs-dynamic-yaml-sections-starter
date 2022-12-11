import Link from 'next/link';

const Navigation = ({type = 'desktop'}) => {
  return (
    <ul className={`${type == 'desktop' ? 'flex justify-end' : ''}`}>
      <li>
        <Link className='p-2 font-bold' href="/">Home</Link>
      </li>
      <li>
        <Link className='p-2 font-bold' href="/about">About</Link>
      </li>
    </ul>
  )
}

export default Navigation