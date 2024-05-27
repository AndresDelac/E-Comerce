'use client'

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validate from "./validate";

export default function Register (){

    function handleSubmit(){
        
    }

    return(
        <section>
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
                <h1 className="">Sign Up</h1>
                    <div>
                    <Field type="text" name="name" className="input"/>
                    <label htmlFor="name">Name</label>
                    <ErrorMessage name="name" component="div" />
                    </div>
                    
                    <div>
                    <Field type="email" name="email" className="input"/>
                    <label htmlFor="email">Email</label>
                    <ErrorMessage name="email" component="div"/>
                    </div>

                    <div>
                    <Field type="date" name="birthdate" cals/>
                    <label htmlFor="birthdate">Birthdate</label>
                    <ErrorMessage name="birthdate" component="div"/>
                    </div>

                    <div>
                    <Field type="number" name="dni_number" className="input"/>
                    <label htmlFor="dni_number">DNI</label>
                    <ErrorMessage name="dni_number" component="div"/>        
                    </div>

                    <div>
                    <Field type="text" name="username" className="input"/>
                    <label htmlFor="username">Username</label>
                    <ErrorMessage name="username" component="div"/>
                    </div>

                    <div>
                    <Field type="password" name="password" className="input"/>
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name="password" component="div"/>
                    </div>

                    <div>
                    <Field type="password" name="repeatPassword" className="input"/>
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <ErrorMessage name="repeatPassword" component="div"/>
                    </div>
                    
                    <button 
                        type="submit">Submit
                    </button>

                </Form>
            </div>

            )}
        
        </Formik>
    </section>
    )
}