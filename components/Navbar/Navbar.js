import React from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="z-20 relative">
      <nav className="flex justify-between items-center w-full fixed lg:px-10 px-5 py-2 mx-auto bg-[#141A27] shadow-sm ">
        <div>
          <Link href="/">
            <a>
              <img src="./assets/logo.svg" alt="logo" className="h-16" />
            </a>
          </Link>
        </div>
        <div className="flex uppercase text-xl lg:space-x-10 space-x-5  text-slate-50">
          <Link href="/">
            <a className="hidden lg:block">Home</a>
          </Link>
          <Link href="/about">
            <a className="hidden lg:block">About Us</a>
          </Link>
          <Link href="/gallery">
            <a className="hidden lg:block">Gallery</a>
          </Link>
          <Link href="/contact">
            <a className="hidden lg:block">Contact Us</a>
          </Link>
          <Link href="/resultchecker">
            <a>
              <button className="py-2 lg:px-3 px-2 bg-red-500 rounded-full hover:scale-105 transition duration-150 ease-in-out">
                Result Checker
              </button>
            </a>
          </Link>
          <div className="flex lg:hidden pr-2">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <img src="./assets/icon-close.svg" />
              ) : (
                <img src="./assets/icon-open.svg" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed z-10 mt-20 w-full pt-5 bg-[#141A27] flex lg:hidden">
          <div className="flex mx-2 w-screen flex-col">
            <Link href="/">
              <a className="p-5 w-full text-white uppercase">Home</a>
            </Link>
            <Link href="/about">
              <a className="p-5 w-full text-white uppercase">About Us</a>
            </Link>
            <Link href="/gallery">
              <a className="p-5 w-full text-white uppercase">Gallery</a>
            </Link>
            <Link href="/">
              <a className="p-5 w-full text-white uppercase">Contact Us</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
