'use client'

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validate from "./validate";
import Link from "next/link";

export default function Register (){

    function handleSubmit(){
        
    }

    return(
        <section className="flex items-center justify-center min-h-screen bg-gray-300">
        <Formik
            initialValues={{
                name: "",
                email: "",
                birthdate: "",
                dni_number: "",
                username: "",
                password: "",
                repeatPassword: "",
            }}
            validate={validate}
            onSubmit={handleSubmit}>

            {() => (
                
                <div>

                <Form className="form">
                <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
                    <div className="flex flex-col justify-center p-8 md:p-14">
                        <span className="mb-3 text-4xl font-bold">Hello, Welcome to Tech Hub!</span>
                        <span className="font-light text-gray-500 mb-8">Create your account</span>
                        
                <h1 className="font-semibold text-2xl">Sign Up</h1>

                <div className="py-4">
                    <label htmlFor="name" className="mb-2 text-md">Name</label>
                    <Field type="text" name="name" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="name" component="div" className="text-red-500" />
                    </div>
                    
                    <div className="py-4">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="email" component="div" className="text-red-500"/>
                    </div>

                    <div className="py-4">
                    <label htmlFor="birthdate">Birthdate</label>
                    <Field type="date" name="birthdate" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="birthdate" component="div" className="text-red-500"/>
                    </div>

                    <div className="py-4">
                    <label htmlFor="dni_number">DNI</label>
                    <Field type="number" name="dni_number" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="dni_number" component="div" className="text-red-500"/>        
                    </div>

                    <div className="py-4">
                    <label htmlFor="username">Username</label>
                    <Field type="text" name="username" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="username" component="div" className="text-red-500"/>
                    </div>

                    <div className="py-4">
                    <label htmlFor="password">Password</label>
                    <Field type="password" name="password" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="password" component="div" className="text-red-500"/>
                    </div>

                    <div className="py-4">
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <Field type="password" name="repeatPassword" className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"/>
                    <ErrorMessage name="repeatPassword" component="div" className="text-red-500"/>
                    </div>

                    <Link href={"/LoginView"}> 
                    <div>
                    <button type="submit" className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-cyan-700 hover:text-white
                    hover:border hover:border-gray-300 py-4 mt-5">
                        Register
                        </button>
                    </div>
                    </Link>

                    <div className="text-center text-gray-400">
                        Do you already have an account?
                        <Link href={"/LoginView"}>
                        <span className="font-bold text-cyan-600">Sign In!</span>
                        </Link>
                    </div>

                    <div className="absolute"></div>

                </div>
                </div>


                </Form>
            </div>

            )}
        
        </Formik>
    </section>
    )
}