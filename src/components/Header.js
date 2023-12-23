import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import { useSelector } from "react-redux";


export const Header = () => {
  const onLineStatus = UseOnlineStatus();
  const [btnName, setBtnName] = useState("Login");

const cartItems = useSelector((store)=>store.cart.items)

  return (
    <div className="flex justify-between bg-green-200 shadow-2xl m-2 sm:bg-pink-100" >
      <div className="logo-header">
        <img className = "w-24 m-4 rounded-full "  src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex items-center font-semibold text-lg">
        <ul className="flex p-4 m-6 ">
          <li className="px-4">Online Status: {onLineStatus ? "✅" :"⭕"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart :{cartItems.length}  </Link>
          </li>
          <button 
            className="border  border-black  bg-blue-800 text-white px-3 "
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
