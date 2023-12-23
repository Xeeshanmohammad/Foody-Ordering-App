import { Image_URL } from "../utils/constant";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, locality } =
    resData?.info;
  return (
    <div data-testid = "res-card" className="m-2 p-2 w-[200px] rounded-md bg-gray-100 hover:bg-gray-200">
      <img
        className="w-56 h-48"
        src={Image_URL + cloudinaryImageId}
        alt="card-logo"
      />
      <h3 className="font-bold py-4">{name}</h3>
      <p className="text-blue-950">{cuisines.join(", ")}</p>
      <p className="font-medium">{costForTwo}</p>

      <h3 className="text-blue-400">{locality}</h3>
      <button className="font-semibold text-white bg-blue-800 rounded-md p-1 m-1">
        {avgRating}
      </button>
    </div>
  );
};

export const withRestaurantLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 bg-black absolute text-gray-200 rounded-md">BestSeller</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
