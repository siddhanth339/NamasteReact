const RestaurantCard = (props) => {
  const resName = props.data.name;
  const cuisine = props.data.cuisines.join(", ");
  const rating = props.data.avgRating;
  const costForTwo = props.data.costForTwo;
  const cloudinaryImageId = props.data.cloudinaryImageId;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        alt="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        style={{ height: "50%", width: "100%" }}
      ></img>
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
