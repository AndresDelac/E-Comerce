import { IProduct } from "./products"
import { LoginProps, RegisterProps } from "../types/types"
import dotenv from "dotenv"

dotenv.config()
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function register(userData: RegisterProps) {
    try {
        let bodyContent = JSON.stringify(userData)
        const res = await fetch(`${apiUrl}/users/register`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: bodyContent 
        })
        if(res.ok){
            const user = await res.json();
            console.log(res);
            
            return user;
        }else {
            throw new Error("Failed to register")
        }

    } catch (error:any) {
        throw new Error(error)
    }
}
export async function logIn(userData: LoginProps) {
    try {
        let bodyContent = JSON.stringify(userData)
        const res = await fetch(`${apiUrl}/users/login`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: bodyContent 
        })
        if(res.ok){
            const login = await res.json();
            console.log(res);
            
            return login;
        }else {
            throw new Error("Failed to login")
        }

    } catch (error:any) {
        throw new Error(error)
    }
}






























