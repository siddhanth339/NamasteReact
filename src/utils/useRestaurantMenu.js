import { useState } from "react";
import { useEffect } from "react";
import { restaurantMenuDataAPI } from "./constants";

// gets list of all menu items of a restaurant from Swiggy API
const useRestaurantMenu = (id) => {
  const [menu, setMenu] = useState(null);
  console.log(menu);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(restaurantMenuDataAPI + id);
    const json = await data.json();

    setMenu(json?.data?.cards);
  };
  return menu;
};

export default useRestaurantMenu;
