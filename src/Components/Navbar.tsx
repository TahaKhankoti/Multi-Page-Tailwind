
import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return(
        <header className="text-gray-200 body-font bg-[#bf9f57]"> 
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"> 
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image 
              className="w-14 h-auto"  
              src="/assets/logo.webp"
              width={35}
              height={40}
              alt="Logo"
            />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-900">Chocolate Bar</Link>
            <Link href="/chocolateBox" className="mr-5 hover:text-gray-900">Chocolate Box</Link>
            <Link href="/quirkyBars" className="mr-5 hover:text-gray-900">Quirky Bars</Link>
            <Link href="/giftBasket" className="mr-5 hover:text-gray-900">Gift Basket</Link>
          </nav>
        </div>
      </header>
      
    )
}
