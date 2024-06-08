import React from "react";
import Card from "../cardProduct/Card";
import CardTemplate from "../CardTemplate/CardTemplate";
import { getproductsDB } from "@/helpers/petitions";
import CarouselMejorado from "../carousel/CarouselMejorado";
import imagesToPreload from "@/helpers/imagesToPreload";
import CarouselFlow from "../carousel/CarouselFlow";


const HomeContainer = async () => {
    const products = await getproductsDB();
    return(
        <main className="bg-black flex justify-between items-center w-[98%] mx-auto mt-1 mb-1 p-4">
            <section>
            <CarouselFlow/>
                {/* <CarouselMejorado images={imagesToPreload}/> */}
            <CardTemplate products = {products} />
            </section>
        </main>
    )
}
export default HomeContainer;