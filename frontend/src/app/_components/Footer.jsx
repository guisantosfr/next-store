export default function Footer() {
  return (
    <footer className="mt-24 mb-5 mx-44">
      <div className="top flex gap-12">
        <div className="item flex-1 flex flex-col gap-3 text-justify">
          <h2 className="text-2xl font-bold text-[#555]">Categories</h2>
          <span className="text-gray">Women</span>
          <span className="text-gray">Men</span>
          <span className="text-gray">Shoes</span>
          <span className="text-gray">Accessories</span>
          <span className="text-gray">New arrivals</span>
        </div>

        <div className="item flex-1 flex flex-col gap-3 text-justify">
          <h2 className="text-2xl font-bold text-[#555]">Links</h2>
          <span className="text-gray">FAQ</span>
          <span className="text-gray">Pages</span>
          <span className="text-gray">Store</span>
          <span className="text-gray">Compare</span>
          <span className="text-gray">Cookies</span>
        </div>

        <div className="item flex-1 flex flex-col gap-3 text-justify">
          <h2 className="text-2xl font-bold text-[#555]">About</h2>
          <span className="text-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Commodi modi error quis, tempora eos provident ex voluptatem voluptas minima,
            necessitatibus voluptatum harum blanditiis a odit voluptatibus nemo ipsa adipisci! Similique?</span>
        </div>

        <div className="item flex-1 flex flex-col gap-3 text-justify">
          <h2 className="text-2xl font-bold text-[#555]">Contact</h2>
          <span className="text-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Commodi modi error quis, tempora eos provident ex voluptatem voluptas minima,
            necessitatibus voluptatum harum blanditiis a odit voluptatibus nemo ipsa adipisci! Similique?</span>
        </div>
      </div>

      <div className="bottom flex justify-between items-center mt-12">
        <div className="left flex items-center">
          <span className="logo text-[#2879fe] font-bold text-2xl">NextStore </span>
          <span className="copyright ml-5 text-sm text-gray">© Copyright 2023. All Rights Reserved.</span>
        </div>

        <div className="right">
          <img src="./img/payment.png" alt="Payment ways" className="h-12" />
        </div>
      </div>
    </footer>
  )
}