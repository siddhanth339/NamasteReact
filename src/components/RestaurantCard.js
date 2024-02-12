const RestaurantCard = (props) => {
  const resName = props.data.name;
  const cuisine = props.data.cuisines.join(", ");
  const rating = props.data.avgRating;
  const costForTwo = props.data.costForTwo;
  const cloudinaryImageId = props.data.cloudinaryImageId;
  return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        style={{ height: "50%", width: "100%" }}
      ></img>
      <h3 className="font-bold py-4 text-lg">{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higher Order Components: Take in a component and return a new component (functional component which is nothing but js function that returns jsx)
export const OfferRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          {props.data.aggregatedDiscountInfoV3.header}
        </label>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    );
  };
};

export default RestaurantCard;
