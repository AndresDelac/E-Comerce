'use client'

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import EcommerceImg from "@/assets/E-commerce-1.jpg"
import validate from "./validate";
import { LoginProps } from "@/types/types";
import { logIn } from "@/helpers/authHelper";
import { useRouter } from "next/navigation";

export default function LogIn(){
    const router = useRouter();

    const [formLogin, setFormLogin] = useState(false);
    
    return(
        <section className="flex items-center justify-center min-h-screen bg-gray-300">
            <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validate={validate}
            onSubmit={(values :LoginProps) => {
                logIn(values)
                .then((login)=>{
                    console.log("User logged", login);
                    setFormLogin(true);
                    alert("User logged");
                    const {token, user} = login;
                    localStorage.setItem('userSession', JSON.stringify({token: token, user}))
                    setTimeout(()=> {
                        router.push("/");
                    }, 1000);
                })
                .catch((error) => {
                    console.log(error);
                    alert(error);
                })
            }}>

                {()=> (
                 
                <div>


                <Form>
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold">Welcome Back!</span>
                        <span className="font-light text-gray-500 mb-8">Please enter your details</span>
               
                    <h1 className="font-semibold text-2xl">Log In</h1>
                    
                    <div className="py-4">
                    <label htmlFor="email" className="mb-2 text-md">Email</label>
                    <Field type="text" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500" name="email"/>
                    <ErrorMessage name="email" component="div" className="text-red-500"/>
                    </div>

                    <div className="py-4">                  
                    <label htmlFor="password" className="mb-2 text-md">Password</label>
                    <Field type="password" name="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="password" component="div" className="text-red-500"/>
                    </div>


                    <div>
                    <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-cyan-700 hover:text-white
                    hover:border hover:border-gray-300 py-4 mt-5">
                        Log In
                        </button>
                    </div>

                    <div className="text-center text-gray-400">
                        Dont` have an account?
                        <Link href={"/RegisterView"}>
                        <span className="font-bold text-black">Sign Up for free!</span>
                        </Link>
                    </div>

                    <div className="relative mt-7">
                    <img 
                    src={EcommerceImg.src} 
                    alt="imgLogin" 
                    className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover" />
                    </div>

                    <div className="absolute hidden bottom-10 right-6 p-6 text-center bg-white bg-opacity-30 backdrop-blur-sm rounded
                     drop-shadow-lg md:block">
                        <span className="text-gray-300 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sunt nesciunt, error esse consequuntur nobis consequatur.</span>
                    </div>

                    </div>
                    </div>

                </Form>
                </div>
                )}

            </Formik>
        </section>
    )
}