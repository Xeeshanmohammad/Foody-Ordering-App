// import { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer";
// import { Menu_Url } from "../utils/constant";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
//   const [listMenu, setListMenu] = useState(null);
const  {resId} = useParams()
const  listMenu = useRestaurantMenu(resId)
const [showIndex, setShowIndex] = useState(null)

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(Menu_Url + 
//       resId+"&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     setListMenu(json.data);
//   };

  if( listMenu === null) return <Shimmer />
  
  const { name, cuisines, costForTwoMessage } =
  listMenu?.cards[0]?.card?.card?.info;
  const { itemCards } =
  listMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

 const categories = listMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )

  return(
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => <RestaurantCategory key={category.card.id} data={category.card.card}
      showIndex = {index === showIndex ? true : false}
      setShowIndex={()=>setShowIndex(index)}
      />)}


      {/* <h2>Menu</h2>
      <ul>
     {itemCards.map((item)=>(<li key={item.card.info.id}>{ item.card.info.name} - {" Rs."}
       {item.card.info.price/100}
       </li>)
      )}
        </ul> */}
    </div>
  );
};

export default RestaurantMenu;
