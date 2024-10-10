
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className="bg-black flex flex-row justify-evenly  items-center">
     
     <Image src='/logo-1.png' alt='logo'
      width={100}
      height={100}
      />

    <div className="flex s items-center justify-end md:justify-between">
      <nav aria-label="Global" className="hidden md:block">
        <ul className="flex flex-1 items-center gap-6 text-sm">
          <li className='hover:text-[22px]'>
            <a className="text-white transition hover:text-gray-100/75" href="#"> About </a>
          </li>

          <li className='hover:text-[22px]'>
            <a className="text-white transition hover:text-gray-100/75" href="#"> Careers </a>
          </li>

          <li className='hover:text-[22px]'>
            <a className="text-white transition hover:text-gray-100/75" href="#"> History </a>
          </li>

          <li className='hover:text-[22px]'>
            <a className="text-white transition hover:text-gray-100/75" href="#"> Services </a>
          </li>

          <li className='hover:text-[22px]'>
            <a className="text-white transition hover:text-gray-100/75" href="#"> Projects </a>
          </li>

        
        </ul>
      </nav>
    </div>
    

</header>
  )
}

export default Header