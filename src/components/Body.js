import { useEffect, useState } from "react";
import { RestaurantCard, withRestaurantLabel } from "./RestaurantCard";
import Shimmer from "../utils/Shimmer";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";
// import { objData } from "../utils/mockData";

export const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterListOfRestaurant, setFilterListOfRestaurant] = useState([]);
  const [filterText, setfilterText] = useState("");
  const onLineStatus = UseOnlineStatus();
  const WithRestaurantData = withRestaurantLabel(RestaurantCard);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (onLineStatus === false)
    return (
      <h1>You look's like offline. Please check your Internet Connection!</h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body"  >
      <div className="search flex ">
        <div className="search  p-4 m-4">
          <input
            type="text"
            data-testid= "searchInput"
            className="search-box border border-solid rounded-md border-black "
            value={filterText}
            onChange={(e) => {
              setfilterText(e.target.value);
            }}
          />
          <button 
            className=" bg-gray-200 text-black px-4 py-2 m-4  font-bold text-lg rounded-md"
            onClick={() => { 
              let filterSerach = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(filterText.toLowerCase())
              );
              setFilterListOfRestaurant(filterSerach);
            }}
          >search</button>
        </div>
        <div className="search  items-center m-4 p-4 ">
          <button
            className=" rounded-md bg-green-100  font-bold text-red-700 px-4 py-2 m-4"
            onClick={() => {
              let filterList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilterListOfRestaurant(filterList);
            }}
          >
            Top rated restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterListOfRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurantMenu/" + restaurant.info.id}
          >
            {restaurant.info.avgRating >= 4.2 ? (
              <WithRestaurantData resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
