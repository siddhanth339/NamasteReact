import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import { restaurantDataAPI } from "../utils/constants.js";
import "bootstrap/dist/css/bootstrap.min.css";

const Restaurant = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState([]);
  const [vegOnly, setVegOnly] = useState(false);
  useEffect(() => {
    fetchResDetails();
  }, []);

  const fetchResDetails = async () => {
    const data = await fetch(restaurantDataAPI + id);
    const json = await data.json();

    setMenu(json?.data?.cards);
  };

  return menu.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Restaurant container">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          id="vegOnly"
          onClick={() => setVegOnly(!vegOnly)}
        ></input>
        <label className="form-check-label" for="vegOnly">
          Veg only
        </label>
      </div>
      <h1>{menu[0].card.card.info.name}</h1>
      <h4>{menu[0].card.card.info.areaName}</h4>
      <h4>{menu[0].card.card.info.costForTwoMessage}</h4>
      <h4>{menu[0].card.card.info.cuisines.join(", ")}</h4>
      <h4>{menu[0].card.card.info.avgRating + " stars"}</h4>
      <hr></hr>
      <div className="menuItems">
        {menu[menu.length - 1].groupedCard.cardGroupMap.REGULAR.cards.map(
          (category, index) => {
            if (category?.card?.card?.title !== undefined) {
              const menuDetails = category.card.card;
              console.log(menuDetails);
              if (menuDetails.itemCards !== undefined)
                return (
                  <MenuItem
                    title={menuDetails.title}
                    length={menuDetails.itemCards.length}
                    menuDetails={menuDetails.itemCards}
                    vegOnlyFlag={vegOnly}
                  ></MenuItem>
                );
            }
          }
        )}
      </div>
    </div>
  );
};

export default Restaurant;
