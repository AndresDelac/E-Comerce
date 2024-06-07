import React from "react";
import productsTester from "@/helpers/products";
import Card from "../cardProduct/Card";
import CardTemplate from "../CardTemplate/CardTemplate";
import { getproductsDB } from "@/helpers/petitions";
import Carousel from "../carousel/Carousel";


const HomeContainer = async () => {
    const products = await getproductsDB();
    return(
        <main className="bg-black flex justify-between items-center w-[98%] mx-auto mt-1 mb-1 p-4">
            <section>
                <Carousel/>
            <CardTemplate products = {products} />
            </section>
        </main>
    )
}
export default HomeContainer;