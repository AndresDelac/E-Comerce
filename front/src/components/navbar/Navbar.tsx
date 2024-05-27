import Link from "next/link";
import React from "react";
import logoM from '@/assets/logoM.png'

export default function Navbar (){
    return(
        <Link href={"/"}>
        <nav className="flex justify-between items-center w-[92%] mx-auto bg-[#373737]">
            <div>
                <img src={logoM.src} alt="Companny Logo" className="w-16"/>
            </div>

        <div className="md:static absolute bg-[#373737] md:min-h-fit min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white text-xl ">


                <li>
                <span>
                Tech.Hub
                </span>
                </li>

                <li>
                <Link href={"/"} className="hover:text-gray-500 rounded-full bg-black">
                Home
                </Link>
                </li>

                <li>
                <Link href={"/dashboard"} className="hover:text-gray-500 rounded-full bg-black">
                    Dashboard
                </Link>
                </li>

                <li>
                <Link href={"/shoppingCart"} className="hover:text-gray-500 rounded-full bg-black">
                    Shopping cart
                </Link>
                </li>


            </ul>
        </div>
            
                <button className="bg-[#87acec] text-black px-5 py-2 rounded-full hover:bg-[#193971]">
                <Link href={"/LoginView"}>
                    Log In
                </Link>
                </button>

        </nav>


        </Link>
    )
}



{/* <button>
    <Link href={"/RegisterView"}>
        Register
    </Link>
</button> */}