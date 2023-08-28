import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined"

export default function Cart() {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      title: 'Long sleeve Graphic t-shirt',
      description: 'Long sleeve Graphic t-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load',
      title: 'Long sleeve Graphic t-shirt',
      description: 'Long sleeve Graphic t-shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    }
  ]

  return (
    <section className="cart absolute right-5 top-20 z-[999] bg-white p-5 shadow-[0px_0px_7px_-5px_rgba(0, 0, 0, .5)] ">
      <h1 className="mb-8 text-gray-300 font-normal text-2xl">Products in your cart</h1>
      <ul>
        {data?.map(item => (
          <li className="item flex items-center gap-5 mb-8" key={item.id}>
            <img src={item.img} alt={item.title} className="w-20 h-24" />
            <div className="details">
              <h2 className="text-lg font-medium">{item.title}</h2>
              <p className="text-gray-300 mb-3 text-sm">{item.description.substring(0, 100)}</p>

              <div className="price text-[#2879fe]">
                1 x {item.price}
              </div>
            </div>
            <DeleteOutlinedIcon className="text-red-600 text-3xl cursor-pointer" />
          </li>
        ))}
      </ul>

      <div className="total flex justify-between font-medium text-lg mb-5">
        <span className="uppercase">Subtotal</span>
        <span>$123</span>
      </div>

      <button className="uppercase w-64 p-3 bg-[#2879fe] text-white flex items-center justify-center gap-5 cursor-pointer border-none font-medium mb-5">Proceed to checkout</button>
      <span className="reset text-red-600 text-xs cursor-pointer">Reset Cart</span>
    </section>
  )
}