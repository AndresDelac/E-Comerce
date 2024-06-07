// import { getproductsDB } from "@/helpers/petitions";
// import { IProduct, IproductProps } from "@/types/types";
// import React from "react";
// import { DetailProduct } from "../detailProduct/DetailProduct";

// const CardDetail : React.FC<IproductProps> = async ({id}) => {
//     const products : IProduct[] = await getproductsDB()
//     const product : IProduct  = products.find((p) => p.id == Number(id))
//     if (!product){
//         console.log(product);

//     }
    
//     return (
//         <div>
//             <DetailProduct 
//             id = {product.id}
//             name = {product.name}
//             image= {product.image}
//             description = {product.description}
//             price = {product.price}
//             categoryId = {product.categoryId}
//             stock = {product.stock}
//             />
//         </div>
//     )
// }

// export default CardDetail;



// import CardDetail from "@/components/cardDetail/cardDetail";
// import { IProduct } from "@/types/types";
// import React from "react";

// const page = ({ params }: {params : {id: number} }) => {

//     console.log(params);
    
    

//     return(

//         <div>
//             <CardDetail />
//         </div>
//     )

// }

// export default page;