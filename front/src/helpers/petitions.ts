import { IProduct } from "./products"
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getproductsDB() {
    try {
        const res = await fetch(`${apiUrl}/products`, {
            method: 'GET',
            next: {revalidate: 3600}
        })
        const products: IProduct[] = await res.json();
        return products;
    } catch (error:any) {
        throw new Error(error)
    }
}