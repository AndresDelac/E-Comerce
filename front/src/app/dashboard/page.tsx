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
    <div className="w-full h-screen bg-slate-200 flex flex-col items-center">

        <div className="border border-red-500 mb-12  text-center max-w-[560px] w-[360px]">
        <h1>Welcome {userData?.user.name}</h1>
        <p>Your address: {userData?.user.address}</p>
        </div>

        <div className="border border-red-500 mt-10">
           
            <h1>History</h1>
           
            
        </div>
    </div>
    )

}

export default Dashboard;