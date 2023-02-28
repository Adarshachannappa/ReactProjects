import { IMG_CDN_URL } from "../Constants";

// const RestaurantCard = (props) =>{
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, area }) => {
  return (
    <div className="card">
      <img alt="card" src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(",")}</h5>
      <h5>Area - {area}</h5>
    </div>
  );
};

export default RestaurantCard;
