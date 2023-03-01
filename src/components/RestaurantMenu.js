import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=13.0238338&lng=77.62640549999999&menuId=" +
        id
    );

    const json = await data.json();
    setRestaurant(json.data);
  }

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
      <div>
        <h3>Restauarant Id: {restaurant.id}</h3>
        <h3>Name: {restaurant.name}</h3>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h4>
          {restaurant.city} - {restaurant.locality}
        </h4>
        <h5>Cost: {restaurant.costForTwoMsg}</h5>
        <h5>Ratings - {restaurant.avgRating} starts</h5>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
