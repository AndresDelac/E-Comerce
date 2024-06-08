'use client'

import { createOrder } from "@/helpers/ordersHelper";
import { IProduct, userSession } from "@/types/types";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";


const Cart = () => {
    const [cart, setCart] = useState<IProduct[]>([]);
    const [totalCart, setTotalCart] = useState<number>(0)
    const [userData, setUserData] = useState<userSession>();

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage){
            const userData: userSession = JSON.parse(localStorage.getItem("userSession")!)
            setUserData(userData)
            !userData?.token && redirect("/LoginView")
        }

        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]")
        if(storedCart){
            // logica para hacer la suma total de los precios.
            let totalCart = 0;
            storedCart?.map((item: IProduct) => {
                totalCart = totalCart + item.price
            })
            setTotalCart(totalCart)
            setCart(storedCart)
        }
    }, [])
    
    const handleClick = async () => {

            const idProducts = new Set(cart.map((product) => product.id))
            await createOrder(Array.from(idProducts), userData?.token!)

            alert("buy succesfully")
            setCart([])
            setTotalCart(0)
            localStorage.setItem("cart", "[]");

       
    }
    

    return(
        // justify-around  para hacer q esten un poco mas cerca
        <div className="bg-black flex flex-row items-center w-full justify-around gap-4 px-4 ">

            <div className="flex flex-col gap-4 ">
            {
                    cart?.length > 0 ? (
                        cart?.map((cart) => {
                            return(
                                <div key={cart.id}>
                                    <div>
                                        <li>
                                        <p className="text-white text-2xl">{cart.name}</p>
                                       <p className="text-green-600">Price: ${cart.price}</p>
                                       </li>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div>
                            <p>
                            You dont have any products in your cart yet
                            </p> 
                          
                        </div>
                    )
                }
            </div>

            <div>
                <p className="text-cyan-400 text-lg">Total: ${totalCart}</p>
                <button onClick={handleClick} className="rounded-sm bg-red-500 hover:bg-green-500 text-black p-2 mt-2">Checkout</button>
            </div>

     </div>
    )

}

export default Cart;