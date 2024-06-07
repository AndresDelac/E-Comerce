'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logoT from '@/assets/logoT.svg'
import { userSession } from "@/types/types";
import { usePathname } from "next/navigation";

export default function Navbar (){
    const pathname = usePathname();
    const [userData, setUserData] = useState<userSession>();
    
//Cada vez que el nav se carge va intentar traer el userSession y setearlo dentro de este estado local del componente
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage){
            const userData = localStorage.getItem("userSession")
            setUserData(JSON.parse(userData!))
        }
    }, [pathname])

    return(
        
        <nav className="flex justify-between items-center w-[100%] p-1 mx-auto bg-black mb-3 ">
            <Link href={"/"}>
            <div>
                <img src={logoT.src} alt="Companny Logo" className="w-24"/>
            </div>
            </Link>

        <div className="md:static absolute bg-black md:min-h-fit min-h-[60vh] left-0 top-[9%] w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 text-white text-xl ">

                <li>
                <span className="text-2xl">
                Tech.Hub
                </span>
                </li>

                <li>
                <Link href={"/"} className="hover:text-cyan-500 p-2 rounded-lg  bg-[#373737]">
                Home
                </Link>
                </li>

                <li>
                <Link href={"/"} className="hover:text-cyan-500 p-2 rounded-lg  bg-[#373737]">
                About us
                </Link>
                </li>




            </ul>

        </div>
        {/* si el usuario esta logeado se renderiza su nombre si no se mostrara el boton de login */}
        {
            userData?.token ? (

            <div className="mr-6 left-0 top-[9%] flex items-center px-1 gap-6">
                
                <Link href={"/dashboard"}>
                <p className=" rounded-lg bg-[#373737] p-2 text-xl text-white">{userData?.user.name}</p>
                </Link>

                <Link href={"/shoppingCart"} className="hover:text-cyan-500 p-2 rounded-lg  bg-[#373737]">
                    Shopping cart
                </Link>
                
                <button className="bg-[#373737] text-white p-2 rounded-lg  hover:bg-cyan-500">Log Out</button>
            </div>
            ) : (
                <div>
                     <Link href={"/LoginView"}>
                <button className="bg-black text-white p-2 rounded-lg  hover:bg-cyan-500">
                    Log In
                </button>
                </Link>
                </div>
                
            )
        }
        
        </nav>
    )
}
