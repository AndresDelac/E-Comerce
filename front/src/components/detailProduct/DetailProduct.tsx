import { IProduct } from "@/types/types";
import React from "react";

export const DetailProduct: React.FC<IProduct> = ({id, name, price, description, stock, image, categoryId}) => {
    return (
        <div>
            <div className="w-1/2 items-center justify-center flex flex-col bg-gray-200 rounded my-4">
            <h2>{name}</h2>
            <img src={image} alt="..." />
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <button className="rounded-sm bg-white hover:bg-gray-400 text-black p-4 mt-2">Add to cart</button>
       </div>
        </div>

        )
}
