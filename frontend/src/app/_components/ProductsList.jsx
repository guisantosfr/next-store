import ProductCard from "./ProductCard"

export default function ProductsList({ categoryId, maxPrice, sort }) {
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
    <div className="list flex justify-between flex-wrap">
      {
        data.map(item =>
          <ProductCard item={item} key={item.id} />
        )
      }

    </div>
  )
}