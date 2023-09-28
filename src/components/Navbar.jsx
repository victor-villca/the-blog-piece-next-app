import Link from 'next/link'
import React from 'react'
const navLinks = [
    {
        id : 1,
        direction: "/",
        name : "home",
    },
    {
        id : 2,
        direction: "/about",
        name : "about",
    },
    {
        id : 3,
        direction: "/blog",
        name : "blog",
    },
    {
        id : 4,
        direction: "/contact",
        name : "contact",
    },
    {
        id : 5,
        direction: "/dashboard",
        name : "dashboard",
    },
    {
        id : 6,
        direction: "/portafolio",
        name : "portafolio",
    },
]
const Navbar = () => {
  return (
        <div>
            <Link href={"/"}> aaa </Link>
            <div>
                {navLinks.map((link) =>(
                        <Link key={link.id} href={link.direction}>
                            {link.name}
                        </Link>
                    ))}
            </div>
        </div>
  )
}

export default Navbar;