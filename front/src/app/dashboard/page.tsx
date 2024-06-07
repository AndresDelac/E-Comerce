'use client'

import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout"
import Link from "next/link";
import { getproductById } from "@/helpers/petitions";
import { userSession } from "@/types/types";

const Dashboard = () => {
    const [userData, setUserData] = useState<userSession>();

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage){
            const userData = localStorage.getItem("userSession")
            setUserData(JSON.parse(userData!))
        }
    }, [])
    
    return(
    <div className="w-full h-screen flex flex-col items-center">

        <div className="border rounded-lg border-cyan-500 mt-28 items-center max-w-[760px] w-[660px]">
            <p className="text-white mx-auto text-2xl p-4 items-center font-serif">Hello {userData?.user.name}, this section its your dashboard, you can view all your private information about your account like your addres or phone number. The orders you have make its in the section "Orders" </p>
        </div>

        <div className="border shadow-md shadow-white hover:shadow-cyan-300 hover:shadow-xl hover:border-cyan-500 rounded-xl text-center my-auto p-4 max-w-[560px] w-[360px] text-white">
            <img src="#" alt="" />
        <h1 className="font-bold text-3xl mb-10 mt-5">Welcome {userData?.user.name}</h1>

        <div className="flex flex-col items-start">
        <span className="mb-2 text-lg font-semibold">Your infomation: </span>
        <p className="font-serif mb-7 text-lg text-gray-300">Your address: {userData?.user.address}</p>
        <p className="font-serif mb-7 text-lg text-gray-300">Your email: {userData?.user.email}</p>
        <p className="font-serif mb-7 text-lg text-gray-300">Your phone number: {userData?.user.phone}</p>
        </div>

        </div>
    </div>
    )

}

export default Dashboard;