import productsTester, { IProduct } from "@/helpers/products";
import React from "react";
import Card from "../cardProduct/Card";

const CardTemplate = ({products} : {products : IProduct[]} ) => {
    return(
        <div>
        {products && products?.map((product)=>{
            return(
                <Card key={product.categoryId} {...product}/>
            )
        })}
    </div>
    )
} 

export default CardTemplate;