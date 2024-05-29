import Link from "next/link";
import React from "react";
import logoT from '@/assets/logoT.svg'

export default function Navbar (){
    return(
        
        <nav className="flex justify-between items-center w-[100%] p-3 mx-auto bg-[#373737]">
            <Link href={"/"}>
            <div>
                <img src={logoT.src} alt="Companny Logo" className="w-24"/>
            </div>
            </Link>

        <div className="md:static absolute bg-[#373737] md:min-h-fit min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white text-xl ">

                <li>
                <span>
                Tech.Hub
                </span>
                </li>

                <li>
                <Link href={"/"} className="hover:text-cyan-500 p-2 rounded-lg  bg-black">
                Home
                </Link>
                </li>

                <li>
                <Link href={"/dashboard"} className="hover:text-cyan-500 p-2 rounded-lg  bg-black">
                    Dashboard
                </Link>
                </li>

                <li>
                <Link href={"/shoppingCart"} className="hover:text-cyan-500 p-2 rounded-lg  bg-black">
                    Shopping cart
                </Link>
                </li>


            </ul>
        </div>
            
                <Link href={"/LoginView"}>
                <button className="bg-black text-white p-2 rounded-lg  hover:bg-cyan-500">
                    Log In
                </button>
                </Link>

        </nav>


        
    )
}



{/* <button>
    <Link href={"/RegisterView"}>
        Register
    </Link>
</button> */}