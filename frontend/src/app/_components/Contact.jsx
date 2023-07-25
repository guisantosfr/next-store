"use client"

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import GoogleIcon from '@mui/icons-material/Google'
import PinterestIcon from '@mui/icons-material/Pinterest'

export default function Contact() {
  return (
    <div className="contact bg-[#2879fe] text-white p-4 flex justify-center">
      <div className="wrapper w-3/5 flex items-center justify-between">
        <span className="uppercase">Be in touch with us</span>

        <div className="mail">
          <input type="text" placeholder="Enter your email"
            className="p-3 border-none rounded-tl-md rounded-bl-md" />
          <button className="uppercase p-3 text-white bg-[#333] rounded-tr-md rounded-br-md border-none">join us</button>
        </div>

        <div className="icons flex gap-3">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
        </div>
      </div>

    </div>
  )
}