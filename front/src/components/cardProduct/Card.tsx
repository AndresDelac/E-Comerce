import { IProduct } from "../../helpers/products"
import React from "react"


const Card:React.FC<IProduct> = ({name, price, description, image, categoryId, stock}) => {
    return(
<div className="flex flex-col items-center justify-between bg-black text-white rounded-xl p-6 border gap-2 max-w-[360px] h-[450px] max-h-[400px] shadow-xl shadow-cyan-500">

            <img className="w-full max-w[100px] h-full max-h[150px] rounded-xl" src={image} alt="Product Image" />
            <h2 className="text-2xl">{name}</h2>
            <p className="text-green-500">Price: ${price}</p>
            <p className="text-slate-300">Stock: {stock}</p>
        </div>
    )
}

export default Card;