import React from 'react'
import Link from "next/link";

const Button = ({children, href}) => {
    return (
      <div className="rounded-xl w-32 hover:shadow-2xl text-center border-2 border-solid border-btn-color hover:border-white bg-btn-color py-2 px-3 group hover:bg-white transition-all duration-3000">
        <Link href={href}>
          <a
            
            className="text-white text-sm md:text-base font-regular group-hover:text-btn-color"
          >
            {children}
          </a>
        </Link>
      </div>
    );
}

export default Button
