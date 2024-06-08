'use client'
import { getOrders } from "@/helpers/ordersHelper";
import { IOrder, userSession } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const OrdersPage = () => {

    const [userData, setUserData] = useState<userSession>();
    const [orders, setOrders] = useState<IOrder[]>([])

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage){
            const userData = localStorage.getItem("userSession")
            setUserData(JSON.parse(userData!))
        }

    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const ordersResponse = await getOrders(userData?.token!);
            setOrders(ordersResponse)
        }
        userData?.token && fetchData()
    }, [userData?.token])        
    

    return(
        <div className=" flex flex-col items-center justify-center text-white">
            <h1 className="text-2xl m-10">
            My Orders
            </h1>

            <div>
                {
                    orders?.length > 0 ? (
                        orders?.map((order) => {
                            return(
                                <div key={order.id}>
                                    <div className="text-xl">                     
                                        <p>{new Date(order.date).toLocaleDateString()}</p>
                                        <p className="text-green-500">Status: {order.status}</p>          
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div>
                            <p>
                            You dont have any order yet
                            </p> 
                            <Link href={"/"}>
                                <label className="hover:bg-cyan-500">Buy now!</label>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default OrdersPage;