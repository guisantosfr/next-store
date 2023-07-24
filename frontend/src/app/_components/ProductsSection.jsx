import ProductCard from "./ProductCard"

export default function ProductsSection({ type }) {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long sleeve Graphic t-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long sleeve Graphic t-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long sleeve Graphic t-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Long sleeve Graphic t-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    }
  ]

  return (
    <section className="products-section my-24 mx-48">
      <div className="top flex items-center justify-between mb-12">
        <h2 className="flex-[2] capitalize text-3xl font-bold">{type} products</h2>
        <p className="flex-[3] text-gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non beatae facere nobis nesciunt. Itaque laborum, optio nemo placeat nihil delectus voluptas, quia ea eum eligendi adipisci minus quos inventore veritatis?</p>
      </div>

      <div className="bottom flex justify-center gap-12">
        {data.map(item => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}