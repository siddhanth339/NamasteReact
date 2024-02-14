import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import "bootstrap/dist/css/bootstrap.min.css";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const Restaurant = () => {
  const [vegOnly, setVegOnly] = useState(false);
  // state variable to implement controlled components of menu items and is used for their visibility
  const [showIndex, setShowIndex] = useState(0);
  const { id } = useParams();
  const menu = useRestaurantMenu(id);
  return menu === null ? (
    <Shimmer />
  ) : (
    <div className="container">
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
      <div className="text-center text-nowrap text-gray-400 flex">
        <h6 className="my-2 mr-2">{menu[0].card.card.info.areaName}</h6>
        <h6 className="m-2">{menu[0].card.card.info.costForTwoMessage}</h6>
        <h6 className="m-2">{menu[0].card.card.info.cuisines.join(", ")}</h6>
        <h6 className="m-2">{menu[0].card.card.info.avgRating + " stars"}</h6>
        <hr></hr>
      </div>
      <div className="menuItems">
        {menu[menu.length - 1].groupedCard.cardGroupMap.REGULAR.cards.map(
          (category, index) => {
            if (category?.card?.card?.title !== undefined) {
              const menuDetails = category.card.card;
              if (menuDetails.itemCards !== undefined)
                return (
                  <MenuItem
                    title={menuDetails.title}
                    length={menuDetails.itemCards.length}
                    menuDetails={menuDetails.itemCards}
                    vegOnlyFlag={vegOnly}
                    showItems={index === showIndex}
                    callSetShowIndex={() => setShowIndex(index)}
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
