'use client'

import { getproductById } from "@/helpers/petitions";
import { IProduct, userSession } from "@/types/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";

const DetailProduct = ({params}: {params:{productID: string}}) => {
    const router = useRouter()

    const [product, setProduct] = useState<IProduct>();
    const [userData, setUserData] = useState<userSession>();

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage){
            const userData = localStorage.getItem("userSession")
            setUserData(JSON.parse(userData!))
        }

        const fetchData = async () => {
            const product = await getproductById(params.productID)
            setProduct(product!);
        }

        fetchData()
    }, [])

    const handleAddToCart = (e: any) => {
        if (!userData?.token){
            alert("You must be logged to buy!")
        } else{
            const cart = JSON.parse(localStorage.getItem("cart") || "[]")
            const productExist = cart.some((product: IProduct) => {
                if(product.id === Number(e?.target?.id)) return true;
                return false;
            })
            if(productExist){
                alert("This product alredy exist in your cart")
                router.push("/shoppingCart")
            } else {
                cart.push(product)
                localStorage.setItem("cart", JSON.stringify(cart));
                alert("Product added to your cart")
                router.push("/shoppingCart")
            }
        }
    }
    

    return(
        <div className="w-full items-center justify-center flex flex-col ">
       <div className="w-1/2 items-center justify-center flex flex-col bg-gray-200 rounded my-4">
            <h2> {product?.name}</h2>
            <img src={product?.image} alt="imagen del producto" />
            <p>{product?.description}</p>
            <p>$ {product?.price}</p>
            <p>Stock: {product?.stock}</p>
            <button id={product?.id.toString()} onClick={handleAddToCart} className="rounded-sm bg-white hover:bg-gray-400 text-black p-4 mt-2">Buy now!</button>
       </div>
     </div>
    )

}

export default DetailProduct;





























// import { getproductById, getproductsDB } from "@/helpers/petitions";
// import { IProduct } from "@/types/types";
// import React from "react";

// const page = async ({ params }: {params : {productID: string} }) => {

//     const product : IProduct = await getproductById(params.productID)

    

//     return(
//         <div className="w-full items-center justify-center flex flex-col border border-red-500 mt-10 mb-14">
//        <div className="w-1/2 items-center justify-center flex flex-col bg-gray-200 rounded my-4">
//             <h2>{product.name}</h2>
//             <img src={product.image} alt="..." />
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <p>stock: {product.stock}</p>
//             <button  className="rounded-sm bg-white hover:bg-gray-400 text-black p-4 mt-2">Add to cart</button>
//        </div>
//         </div>
//     )

// }

// export default page;