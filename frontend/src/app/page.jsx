import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import Slider from './_components/Slider'
import ProductsSection from './_components/ProductsSection'
import Categories from './_components/Categories'
import Contact from './_components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <ProductsSection type="featured" />
      <Categories />
      <ProductsSection type="trending" />
      <Contact />
      <Footer />
    </>
  )
}
