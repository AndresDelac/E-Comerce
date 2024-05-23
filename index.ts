

interface IProduct {
    name: string;
    price: number;
    description: string;
    image: string;
    categoryId: number;
    stock: number;
  }

  const productsTester: IProduct[] = [
    {
      name: "iPhone 11",
      price: 699,
      description:
        "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
      image:
        "https://mac-center.com/cdn/shop/files/194252097236-7.jpg?v=1709763494",
      categoryId: 1,
      stock: 10,
    },
    {
      name: "MacBook Air",
      price: 999,
      description:
        "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
      image:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbookair-og-202402?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1707414684423",
      categoryId: 2,
      stock: 10,
    }
];




let createOrder: {
    userId: number,
    products: number[]
}

let loginUser:{
    email: string,
    password: string
}

let registerUser:{
    name: string,
    email: string,
    password: string,
    address: string,
    phone: string
}






