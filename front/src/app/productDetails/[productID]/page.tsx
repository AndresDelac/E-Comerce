import React from "react";

const page = ({ params }: any) => {

    console.log(params);
    

    return(
        <div>
        <h1>The product Id is {params.productID}</h1>
     </div>
    )

}

export default page;