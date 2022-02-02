import React from "react";
import Link from "next/link";

function Footer() {
  const Year = new Date().getFullYear();
  return (
    <div>
      <img src="./assets/wave.svg" className="-mb-12" />

      <div className="lg:h-[13rem] h-[32rem] bg-red-400 w-full">
        <div className="flex lg:flex-row flex-col m-10">
          <img src="./assets/logo.svg" className="h-20 mr-20"></img>
          <div className="flex flex-col mr-40 lg:ml-0 -ml-7">
            <h2 className="text-slate-50 font-bold text-xl">Links</h2>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About us</a>
            </Link>
            <Link href="/gallery">
              <a>Gallery</a>
            </Link>
            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
          </div>
          <div className="flex flex-col lg:ml-0 -ml-7">
            <h2 className="text-slate-50 font-bold text-xl">Contact</h2>
            <h3>Location: Ikwa - Zuba, Abuja - FCT</h3>
            <h3>Tel: +234(0)7057679018, 0701 1392 564</h3>
            <h3>Email: info@favoureddestinies.com.ng</h3>
          </div>
        </div>
        <h2 className="mt-10 text-center">
          &copy; {Year} Favoured destinies Academy. Designed by{" "}
          <a href="https://devsamuel.vercel.app" className="text-blue-800">
            Devsamuel
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Footer;
