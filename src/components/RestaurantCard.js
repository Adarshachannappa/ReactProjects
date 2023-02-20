import { IMG_CDN_URL } from "../Constants";

// const RestaurantCard = (props) =>{
const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravel,
}) => {
  return (
    <div className="card">
      <img alt="card" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{lastMileTravel} minutes</h5>
    </div>
  );
};

export default RestaurantCard;