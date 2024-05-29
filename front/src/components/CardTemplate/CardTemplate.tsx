import productsTester, { IProduct } from "@/helpers/products";
import React from "react";
import Card from "../cardProduct/Card";
import Link from "next/link";

const CardTemplate = ({products} : {products : IProduct[]} ) => {
    return(
        <div className="p-1 flex flex-row gap-4">
        {products && products?.map((product)=>{
            return(
                <Link key={product.categoryId} href={`/productDetails/${product.categoryId}`}>
                <Card key={product.categoryId} {...product}/>
                </Link>
            )
        })}
    </div>
    )
} 

export default CardTemplate;