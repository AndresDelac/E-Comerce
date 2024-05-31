'use client'

import React, { useEffect, useState } from "react";
import DashboardLayout from "./layout"
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
    <div className="w-full h-screen">
        <h1>Welcome {userData?.user.name}</h1>
        <p>Your address: {userData?.user.address}</p>
    </div>
    )

}

export default Dashboard;