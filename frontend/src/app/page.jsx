import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <Link href="/product/2">Go to product page</Link>
      <Link href="/category/3">Go to category page</Link>
    </>
  )
}
