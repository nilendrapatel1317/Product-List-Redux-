import Cart from "@/components/cart";
import Product from "@/components/products";
import { productData } from "@/context/AppContext";
import React from "react";

const Page = () => {
  const totalProducts = productData.length;
  const totalAmount = productData.reduce(
    (sum, product) => sum + product.price,
    0
  );

  return (
    <>
    <h1 className="text-center text-4xl font-bold my-5 border-b-4 border-black pb-5 ">Redux Toolkit Practice Next.js App</h1>
      <Cart />
      <div className="px-7 sm:px-16 grid grid-cols-2 sm:grid-cols-6 gap-5">
        {productData.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default Page;
