import { useEffect, useState } from "react";
import { RESTAURANTSLIST_API } from "./constants";
const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(RESTAURANTSLIST_API);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
  };
  return listOfRestaurants;
};

export default useRestaurantList;
