import { IProduct } from "../../helpers/products"
import React from "react"


const Card:React.FC<IProduct> = ({name, price, description, image, categoryId, stock}) => {
    return(
<div className="flex flex-col items-center justify-between bg-slate-200 text-black rounded-xl p-6 border gap-2 max-w-[360px] h-[450px] max-h-[400px] shadow ">

            <img className="w-full max-w[100px] h-full max-h[150px] rounded-xl" src={image} alt="Product Image" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>Categoty: {categoryId}</p>
            <p>Stock: {stock}</p>
        </div>
    )
}

export default Card;