import Navbar from "../../_components/Navbar"
import Footer from "../../_components/Footer"

export default function Product({ params }) {
  return (
    <>
      <Navbar />
      <h1>Product {params.id}</h1>
      <Footer />
    </>
  )
}