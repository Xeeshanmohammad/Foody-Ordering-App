import React from "react";
import { Image_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/CreateSlice";

function ItemList({ items }) {
const dispatch = useDispatch()

  const handlerCLick = (item) =>{
       dispatch(addItems(item))
  }

  return (
    <div>
      {items.map((item) => (
        <div data-testid = "foodItems"
          className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" - ₹"}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                <p className="text-xs">{item.card.info.description}</p>
              </span>
            </div>
          </div>
<div>
<div className="absolute">
  <button className="bg-blue-800 text-white rounded-md p-2" onClick={()=>handlerCLick(item)}>Add +</button>
</div>

          <img
            className="w-[140px] rounded-md "
            src={Image_URL + item.card.info.imageId}
            alt="image-logo"
            />
            </div>
</div>
      ))}
    </div>
  );
}
export default ItemList;
