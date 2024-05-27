'use client'

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import logInSchema from "./validate"

export default function LogIn(){

    function handleSubmit(){}
    
    return(
        <section>
        
            <Formik
            initialValues={{
                username: "",
                password: "",
                repeatPassword: ""
            }}
            validationSchema={logInSchema}
            onSubmit={handleSubmit}>

                {()=> (
                    
                    //RENDER
                <div >
                <Form>
                        <h1>Log In</h1>
                    <div>
                    <Field type="text" name="username"/>
                    <label htmlFor="username">Username</label>
                    <ErrorMessage name="username" component="div" />
                    </div>

                    <div >                  
                    <Field type="password" name="password" className="input"/>
                    <label htmlFor="password">Password</label>
                    <ErrorMessage name="password" component="div" />
                    </div>

                    <div>
                    <Field type="password" name="repeatPassword" className="input"/>
                    <label htmlFor="repeatPassword">Repeat password</label>
                    <ErrorMessage name="repeatPassword" component="div"/>
                    </div>

                    <div>
                    <button type="submit">
                        Log In
                        </button>
                    </div>
                </Form>
                </div>
                )}

            </Formik>
        </section>
    )
}