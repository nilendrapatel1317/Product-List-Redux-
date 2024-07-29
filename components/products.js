"use client";
import { addItems, removeItems } from "@/store/Reducers/cartReducer";
import React from "react";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="border w-40 h-fit p-2  bg-green-300">
      <div className=" h-20 bg-white"></div>
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-md">Price: Rs {product.price}</p>
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() =>
            dispatch(addItems({ name: product.name, price: product.price }))
          }
          className="bg-blue-500 py-1 text-sm rounded-md text-white"
        >
          Add
        </button>
        <button
          onClick={() =>
            dispatch(removeItems({ name: product.name, price: product.price }))
          }
          className="bg-red-500 border py-1 text-sm rounded-md text-white "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;
