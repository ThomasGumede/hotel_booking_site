
import react, {useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

import NavItems from "./SharedComponents/NavItems";
import Button from "./SharedComponents/Button";
import Btn from "./SharedComponents/Btn";
import {CgMenuRight, CgMenuLeft} from 'react-icons/cg'

function NavBar() {

    const [show, setShow] = useState(false)
    useEffect(() => {
        window.onscroll = () => {
            setShow(false)
        }
    })

    const onclick = () => {
        show === false ? setShow(true) : setShow(false)
    }

    

    return (
      <nav className="w-full px-2 md:max-cont bg-back-color z-50 py-4 transition duration-1000">
        <div className="flex justify-between w-full items-center m-auto">
          <div>
            <a href="/" className="logo">
              Exclusive BnB
            </a>
          </div>

          <ul
            className={`z-50 md:tablet ${
              show === true ? "left-0" : "-left-full"
            } z-50 flex phone`}
          >
            <NavItems href="/">Home</NavItems>
            <NavItems href="/listings">Listings</NavItems>
            <NavItems href="/locations">Locations</NavItems>
            <NavItems href="/not_available">Contacts</NavItems>
            <div
              onClick={onclick}
              className="absolute top-5 right-8 text-3xl text-white md:hidden"
            >
              <CgMenuLeft />
            </div>
          </ul>

          <div className="hidden space-x-8 md:flex items-center">
            <Btn href="/not_available">Log in</Btn>
            <Button href='/listings'>Booking</Button>
          </div>

          <CgMenuRight
            onClick={onclick}
            className={`text-3xl text-h1-color ${
              show === true ? "hidden" : "block"
            } md:hidden`}
          />
        </div>
      </nav>
    );
}

export default NavBar