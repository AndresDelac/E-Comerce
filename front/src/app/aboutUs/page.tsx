import React from "react";
import img1 from "@/assets/img-2-about.webp"
import img2 from "@/assets/img-4-about.jpg"
import img3 from "@/assets/img-5-about.jpg"
import Link from "next/link";

const page = () => {
    return(
        <div className="bg-black m-2">
            <img src={img1.src} alt="" className=" mx-auto w-[full] h-[560px] m-5"/>

            <div className="border border-t border-blue-600 m-2"></div>
            <section className="text-white">
            <h1 className="text-center text-3xl text-cyan-500">What is Tech.Hub?</h1>

            <div className="mt-4 text-center text-xl mb-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, rem ratione laudantium, saepe optio voluptatum sunt recusandae reiciendis sit inventore ea velit fugiat! Tempore voluptatum, quam inventore voluptatem mollitia ipsum?
                Vero qui distinctio modi alias maxime facere temporibus quo consectetur, sed totam ullam ipsum provident voluptatibus obcaecati soluta nostrum est laudantium? Beatae exercitationem repellat qui, autem quod earum soluta maxime.
                Ducimus minima vitae voluptates voluptatem dolorem ut, delectus harum perferendis recusandae dolores expedita? Illum sunt ipsum, in esse minus voluptas repellendus odio facilis enim facere aliquam beatae tenetur amet ipsam!
            </div>

            <div className="flex flex-row gap-3 items-center justify-center mt-12 mb-16">

                <div>
                <img src={img2.src} alt="" className="w-[480px] h-[380px]"/>
                </div>

                <div>
                <img src={img3.src} alt="" className="w-[480px] h-[380px]"/>
                </div>

            </div>

            <div className="border border-t border-blue-600 m-2"></div>
            <div className="">
                <h2 className="text-left m-4 text-2xl text-cyan-500">Why choose us?</h2>
                <p className="mt-4 text-center text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure saepe numquam laboriosam, modi incidunt rerum facilis maiores dolor ducimus nesciunt amet inventore nisi consequatur ullam quasi. Ipsa consectetur a voluptatem?
                Odit possimus quia incidunt, explicabo cum doloremque fuga nostrum labore tempore suscipit doloribus, necessitatibus, id quasi! Modi possimus vel, ducimus cumque blanditiis temporibus beatae soluta officia id quis dolor sed!</p>
            </div>


            <div className="text-center text-4xl text-cyan-500 m-40">
                <h1 className="mb-10">Thanks for being here</h1>
                <Link href={"/"}>
                <span className="mt-12 hover:border hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-400">
                Keep exploring our page! ->
                </span>
                </Link>
            </div>
            </section>
        </div>
    )
}

export default page;