import Link from "next/link";
import React from "react";

export default function Navbar (){
    return(
        <Link href={"/"}>
        <nav>
            <ul>
                <Link href={"/"}>
                    <li>NAVBAR</li>
                </Link>

                <Link href={"/home"}>
                    <li>Home</li>
                </Link>
            </ul>
        </nav>
        </Link>
    )
}