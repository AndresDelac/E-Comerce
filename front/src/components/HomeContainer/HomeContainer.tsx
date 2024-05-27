import React from "react";
import productsTester from "@/helpers/products";
import Card from "../cardProduct/Card";
import CardTemplate from "../CardTemplate/CardTemplate";


const HomeContainer = () => {
    return(
        <main>
            <CardTemplate products = {productsTester} />
        </main>
    )
}
export default HomeContainer;