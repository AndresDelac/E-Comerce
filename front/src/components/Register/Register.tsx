'use client'

import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validate from "./validate";
import Link from "next/link";
import { IRegister, RegisterErrorProps, RegisterProps } from "@/types/types";
import { useRouter } from "next/navigation";
import { register } from "@/helpers/authHelper";

export default function Register (){
    const router = useRouter()

    const [formRegister, setFormRegister] = useState(false);
    
    return(
        <section className="flex items-center justify-center min-h-screen bg-black">
        <Formik
            initialValues={{
                email: "",
                password: "",
                name: "",
                address: "",
                phone: "",
            }}
            validate={validate}
            onSubmit={(values : IRegister, { resetForm }) =>{
                const dataUser : RegisterProps = {
                name: values.name,
                email: values.email,
                password:  values.password,
                address: values.address,
                phone: values.phone,
                };
                register(dataUser)
                .then((user)=> {
                    console.log("User logged", user);
                    setFormRegister(true)
                    console.log(user);
                    
                    resetForm();
                    setTimeout(()=> {
                        router.push("/LoginView");
                    }, 1000);
                })
                .catch((error)=> {
                    console.log("Error while login", error);
                    alert("Error while login" + error.message)
                })
            } }>

            {() => (
                
                <div>

                <Form className="form">
                <div className="relative flex flex-col m-6 space-y-8 bg-black shadow-lg rounded-2xl  shadow-white md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold text-white">Hello, Welcome to Tech Hub!</span>
                        <span className="font-light text-cyan-300 mb-8">Create your account</span>
                        
                <h1 className="font-semibold text-2xl text-cyan-300">Sign Up</h1>

                    <div className="py-4 ">
                    <label htmlFor="email" className="text-white">Email</label>
                    <Field type="email" name="email" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="email" component="div" className="text-red-500"/>
                    </div>

                    <div className="py-4">
                    <label htmlFor="password" className="text-white">Password</label>
                    <Field type="password" name="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="password" component="div" className="text-red-500"/>
                    </div>

                <div className="py-4">
                    <label htmlFor="name" className="mb-2 text-md text-white">Name</label>
                    <Field type="text" name="name" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>
                    

                    <div className="py-4">
                    <label htmlFor="address" className="text-white">Addres</label>
                    <Field type="text" name="address" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="address" component="div" className="text-red-500"/>
                    </div>


                    <div className="py-4">
                    <label htmlFor="phone" className="text-white">Phone</label>
                    <Field type="number" name="phone" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="phone" component="div" className="text-red-500"/>        
                    </div>


                    
                    
                    <button
                    type="submit" 
                    className="w-full bg-white text-black p-2 rounded-xl mb-6 hover:bg-cyan-500 hover:text-white
                    hover:border hover:border-gray-300 py-4 mt-10">
                        Register
                    </button>
                    

                    {formRegister && (
                <p className="text-center success">
                  Usuario registrado con éxito!
                </p>
              )}

                    <div className="text-center text-gray-400">
                        Do you already have an account?
                        <Link href={"/LoginView"}>
                        <span className="font-bold text-cyan-300"> Sign In!</span>
                        </Link>
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

