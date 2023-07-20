import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header>
      <nav className='h-20'>
        <div className="wrapper px-10 py-4 flex justify-between items-center">
          <div className='left flex items-center gap-7'>
            <div className="item flex items-center text-lg">
              <img src="/img/en.png" alt="" />
              <KeyboardArrowDownIcon />
            </div>

            <div className="item flex items-center text-lg">
              <span>USD</span>
              <KeyboardArrowDownIcon />
            </div>

            <div className="item flex items-center text-lg">
              <Link href="/category/1">Men</Link>
            </div>

            <div className="item flex items-center text-lg">
              <Link href="/category/2">Women</Link>
            </div>

            <div className="item flex items-center text-lg">
              <Link href="/category/3">Children</Link>
            </div>
          </div>

          <div className="center text-3xl">
            <Link href="/">NextStore</Link>
          </div>

          <div className="right flex items-center gap-7">
            <div className="item flex items-center text-lg">
              <Link href="/">Homepage</Link>
            </div>

            <div className="item flex items-center text-lg">
              <Link href="/">About</Link>
            </div>

            <div className="item flex items-center text-lg">
              <Link href="/">Contact</Link>
            </div>

            <div className="item flex items-center text-lg">
              <Link href="/">Stores</Link>
            </div>

            <div className="icons flex gap-5 text-[#777] cursor-pointer">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderOutlinedIcon />

              <div className="cartIcon relative">
                <ShoppingCartOutlinedIcon />
                <span className="text-xs w-5 h-5 rounded-full bg-[#2879fe] text-white
                absolute right-[-10px] top-[-10px] flex justify-center items-center">0</span>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  )
}