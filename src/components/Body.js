import { Link } from "react-router-dom";
import RestaurantCard, { OfferRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );

  const listOfRestaurants = useRestaurantList();
  if (
    listOfRestaurants.length !== 0 &&
    listOfFilteredRestaurants.length === 0
  ) {
    setListOfFilteredRestaurants(listOfRestaurants);
  }

  const WithOfferLabel = OfferRestaurantCard(RestaurantCard);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body container">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black mx-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            className="px-4 py-2 bg-green-300 rounded-lg"
            onClick={() => {
              const searchedRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setListOfFilteredRestaurants(searchedRes);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-gray-50 rounded-lg"
            onClick={() => {
              const res = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfFilteredRestaurants(res);
            }}
          >
            Top rated restaurants
          </button>
          <label>Username: </label>
          <input
            type="text"
            className="mx-2 border border-solid border-black"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfFilteredRestaurants.map((restaurant) => {
          if (restaurant.info.aggregatedDiscountInfoV3?.header !== undefined) {
            return (
              <Link to={"restaurants/" + restaurant.info.id}>
                <WithOfferLabel
                  key={restaurant.info.id}
                  data={restaurant.info}
                />
              </Link>
            );
          } else {
            return (
              <Link to={"restaurants/" + restaurant.info.id}>
                <RestaurantCard
                  key={restaurant.info.id}
                  data={restaurant.info}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Body;
