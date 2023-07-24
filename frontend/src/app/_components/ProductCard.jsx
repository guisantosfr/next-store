import Link from "next/link";

export default function ProductCard({ item }) {
  return (
    <Link href={`/product/${item.id}`}>
      <div className="card w-[17.5rem] flex flex-col gap-3">
        <div className="images w-full h-[25rem] overflow-hidden relative group">
          {item.isNew &&
            <span className="absolute top-[5px] left-[5px] bg-white text-teal-400 py-[3px] px-[5px] z-[3] font-medium text-xs">New Season</span>}
          <img src={item.img} alt="First image" className="main-img w-full h-full absolute z-[1]" />
          <img src={item.img2} alt="Second image" className="second-img w-full h-full absolute group-hover:z-[2]" />
        </div>

        <h3 className="text-base font-medium">{item.title}</h3>

        <div className="prices flex gap-5">
          <h4 className="text-lg font-medium text-gray-400 line-through">{item.oldPrice}</h4>
          <h4 className="text-lg font-medium">{item.price}</h4>
        </div>
      </div>
    </Link>
  )
}