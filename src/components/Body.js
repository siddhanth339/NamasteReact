import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState(
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // Optional Chaining
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
