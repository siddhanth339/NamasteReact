import vegIcon from "../images/veg-icon.png";
import nonVegIcon from "../images/non-veg-icon.png";
import { MENUITEM_IMAGE_URL } from "../utils/constants";
import { useState } from "react";
const MenuItem = (props) => {
  const { title, length, vegOnlyFlag, showItems, callSetShowIndex } = props;
  let { menuDetails } = props;
  if (vegOnlyFlag)
    menuDetails = menuDetails.filter(
      (item) => item.card.info.itemAttribute.vegClassifier === "VEG"
    );
  return (
    <div className="shadow-lg rounded-lg p-3">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => callSetShowIndex()}
      >
        <div>{title + " (" + length + ")"}</div>
        <div>⬇️</div>
      </div>
      {menuDetails.map((res) => (
        <>
          {showItems && (
            <div className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
              <div className="w-9/12">
                {res.card.info.itemAttribute.vegClassifier === "VEG" ? (
                  <img
                    width="20px"
                    height="20px"
                    src={vegIcon}
                    alt="veg-icon"
                  ></img>
                ) : (
                  <img
                    width="20px"
                    height="20px"
                    src={nonVegIcon}
                    alt="non-veg-icon"
                  ></img>
                )}
                <span className="">{res.card.info.name}</span>
                <br></br>
                <span className="">₹ {res.card.info.price / 100}</span>
                <p className="text-gray-500 text-xs my-1">
                  {res.card.info.description}
                </p>
              </div>
              <div className="relative w-3/12">
                <button className="p-2 rounded-lg bg-white shadow-lg">
                  Add +
                </button>
                <img
                  className="rounded-lg"
                  src={MENUITEM_IMAGE_URL + res.card.info.imageId}
                  alt="menuItemImage"
                ></img>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default MenuItem;
