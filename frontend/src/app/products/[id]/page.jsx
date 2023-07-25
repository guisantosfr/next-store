import Navbar from "../../_components/Navbar"
import Footer from "../../_components/Footer"

export default function Category({ params }) {
  return (
    <>
      <Navbar />
      <h1>Category {params.id}</h1>
      <Footer />
    </>
  )
}