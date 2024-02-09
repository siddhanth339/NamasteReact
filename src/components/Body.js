import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );
  console.log("body");

  const listOfRestaurants = useRestaurantList();
  if (
    listOfRestaurants.length !== 0 &&
    listOfFilteredRestaurants.length === 0
  ) {
    setListOfFilteredRestaurants(listOfRestaurants);
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body container">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          onClick={() => {
            const searchedRes = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setListOfFilteredRestaurants(searchedRes);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const res = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfFilteredRestaurants(res);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfFilteredRestaurants.map((restaurant) => (
          <Link to={"restaurants/" + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} data={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
