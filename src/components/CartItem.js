// could have had one component that just returns jsx for each menu item but now the MenuItem.js has more complex functionality so
// creating this file to only return menu item
import vegIcon from "../images/veg-icon.png";
import nonVegIcon from "../images/non-veg-icon.png";
import { MENUITEM_IMAGE_URL } from "../utils/constants";
const CartItem = (props) => {
  const { menuDetails } = props;
  return menuDetails.map((res) => (
    <>
      {
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
            <img
              className="rounded-lg"
              src={MENUITEM_IMAGE_URL + res.card.info.imageId}
              alt="menuItemImage"
            ></img>
          </div>
        </div>
      }
    </>
  ));
};

export default CartItem;
