import { useState} from "react";
import { useNavigate } from "react-router-dom";
import cart from "/cart.svg";

export default function Header({ setSearchTerm }) { 
  const navigate = useNavigate();
  
  function goToCart(link) {
    navigate(link);
  }

  

  function onChange(event) {
    const value = event.target.value;
    setSearchTerm(value); 
  }

  

  return (
    <div className="header flex items-center justify-between">
      <div
        onClick={() => goToCart("/")}
        className="flex items-center gap-4 cursor-pointer"
      >
        <img src="/logo.svg" alt="" />
        <div>
          <h1 className="text-2xl font-bold">React Pizza</h1>
          <p className="text-gray-500">самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div className="">
        <input
          onChange={onChange} // Изменено на onChange
          className="py-2 px-6 rounded-full border cursor-pointer"
          type="text"
          placeholder="Введите название пиццы"
        />
      </div>
      <div
        onClick={() => goToCart("/cart")}
        className="bg-orange-500 flex gap-3 items-center justify-center py-2 px-6 rounded-full text-white cursor-pointer"
      >
        <span className="font-bold">570 тг</span>
        <hr className="w-0.5 h-6 bg-orange-300 border-none rounded-xl" />
        <div>
          <img src={cart} alt="" />
        </div>
      </div>
    </div>
  );
}