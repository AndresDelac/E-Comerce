export interface RegisterProps {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

export interface IRegister {
    name: string;
    email: string;
    password: string;
    address: string;
    phone: string;
}

export interface RegisterErrorProps {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface LoginErrorProps {
    email?: string;
    password?: string;
}

export interface userSession {
    token: string;
    user: {
        address: string;
        email: string;
        id: number;
        name: string;
        phone: string;
        role: string;
        orders: []
    }
}

export interface IProduct {
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
  }