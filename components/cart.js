"use client";
import { removeAllItems } from "@/store/Reducers/cartReducer";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const totalAmount = cart.reduce((a, b) => a + b.price, 0);

  return (
    <div className="px-7 sm:px-16 my-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div>
        <p className="text-lg sm:text-xl">
          Total Product :{" "}
          <span
            className={
              cart?.length === 0 ? "font-bold" : "text-green-500 font-bold"
            }
          >
            {cart?.length}
          </span>
        </p>
        <p className="text-lg sm:text-xl">
          Total Amount : Rs{" "}
          <span
            className={
              totalAmount === 0 ? "font-bold" : "text-green-500 font-bold"
            }
          >
            {totalAmount}
          </span>{" "}
          /-
        </p>
      </div>
      <div className="my-3">
        <button
          onClick={() => dispatch(removeAllItems())}
          className="bg-red-500 text-white px-2 py-3 rounded-md"
        >
          Remove all products
        </button>
      </div>
    </div>
  );
};

export default Cart;
