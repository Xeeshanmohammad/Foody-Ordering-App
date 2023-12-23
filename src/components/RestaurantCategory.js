import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import ItemList from "./ItemList";

function RestaurantCategory({ data, showIndex,setShowIndex }) {
    const clickHandler = ()=>{
        setShowIndex()
    }
  return (
   <div>
     <div className="w-6/12 bg-gray-100 shadow-lg mx-auto p-4 my-4 ">
    <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
    <span className="font-bold text-lg">
        {data.title} ({data.itemCards.length})
      </span>
      <span>
        <HiChevronDown />
      </span>
    </div>
    {showIndex && <ItemList items = {data.itemCards}/>}
    </div>
   </div>
  );
}

export default RestaurantCategory;
