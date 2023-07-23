import Link from 'next/link'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import Slider from './_components/Slider'

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <h1>Home page</h1>
      <Link href="/product/2">Go to product page</Link>
      <Link href="/category/3">Go to category page</Link>
      <Footer />
    </>
  )
}
