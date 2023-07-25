import Link from "next/link";

export default function Categories() {
  return (
    <section className="categories flex h-[80vh] gap-3 m-3">
      <div className="col flex flex-1 flex-col gap-3">
        <div className="row flex flex-1 gap-3 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-full w-full"
          />
          <button className="absolute min-w-[100px] h-12 p-3 inset-0 m-auto w-fit cursor-pointer border-none bg-white uppercase font-medium hover:bg-[#2879fe] hover:text-white">
            <Link href="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row flex flex-1 gap-3 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-full w-full"
          />
          <button className="absolute min-w-[100px] h-12 p-3 inset-0 m-auto w-fit cursor-pointer border-none bg-white uppercase font-medium hover:bg-[#2879fe] hover:text-white">
            <Link href="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col flex flex-1 flex-col gap-3">
        <div className="row flex flex-1 gap-3 relative overflow-hidden">
          {" "}
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-full w-full"
          />
          <button className="absolute min-w-[100px] h-12 p-3 inset-0 m-auto w-fit cursor-pointer border-none bg-white uppercase font-medium hover:bg-[#2879fe] hover:text-white">
            <Link href="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      <div className="col col-l flex flex-[2] flex-col gap-3">
        <div className="row flex flex-1 gap-3 relative overflow-hidden">
          <div className="col flex flex-1 flex-col gap-3">
            <div className="row flex flex-1 gap-3 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-full w-full"
              />
              <button className="absolute min-w-[100px] h-12 p-3 inset-0 m-auto w-fit cursor-pointer border-none bg-white uppercase font-medium hover:bg-[#2879fe] hover:text-white">
                <Link href="/products/1">Men</Link>
              </button>
            </div>
          </div>
          <div className="col flex flex-1 flex-col gap-3">
            <div className="row flex flex-1 gap-3 relative overflow-hidden">
              {" "}
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="h-full w-full"
              />
              <button className="absolute min-w-[100px] h-12 p-3 inset-0 m-auto w-fit cursor-pointer border-none bg-white uppercase font-medium hover:bg-[#2879fe] hover:text-white">
                <Link href="/products/1">Accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row flex flex-1 gap-3 relative overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
            className="h-full w-full"
          />
          <button className="absolute min-w-[100px] h-12 p-3 inset-0 m-auto w-fit cursor-pointer border-none bg-white uppercase font-medium hover:bg-[#2879fe] hover:text-white">
            <Link href="/products/1">Shoes</Link>
          </button>
        </div>
      </div>
    </section>
  )
}