import { IProduct } from "../../helpers/products"
import React from "react"


const Card:React.FC<IProduct> = ({name, price, description, image, categoryId, stock}) => {
    return(
<div className="flex flex-col items-center justify-between bg-slate-400 text-black rounded-xl p-4 border gap-2 max-w-[300px] h-[450px] max-h-[450px] shadow">

            <img className="w-full max-w[100px] h-full max-h[150px] rounded-xl" src={image} alt="Product Image" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
            <p>{categoryId}</p>
            <p>{stock}</p>
        </div>
    )
}

export default Card;