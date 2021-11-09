import React from 'react'
import Link from "next/link";

const Btn = ({children, href}) => {
    return (
      <div className="rounded-xl hover:shadow-2xl text-center border-2 border-solid border-btn-color py-2 px-3 group hover:border-white transition-all duration-3000">
        <Link href={href}>
          <a
            href={href}
            className="text-btn-color text-sm md:text-base font-regular"
          >
            {children}
          </a>
        </Link>
      </div>
    );
}

export default Btn
