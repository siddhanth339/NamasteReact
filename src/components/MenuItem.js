import vegIcon from "../images/veg-icon.png";
import nonVegIcon from "../images/non-veg-icon.png";
import { MENUITEM_IMAGE_URL } from "../utils/constants";
const MenuItem = (props) => {
  const { title, length, vegOnlyFlag } = props;
  let { menuDetails } = props;

  if (vegOnlyFlag)
    menuDetails = menuDetails.filter(
      (item) => item.card.info.itemAttribute.vegClassifier === "VEG"
    );
  console.log(menuDetails);
  return (
    <div className="shadow-lg rounded-lg p-3">
      <h5>{title + " (" + length + ")"}</h5>
      {menuDetails.map((res) => (
        <>
          <div className="p-2 m-2 border-gray-200 border-b-2 flex justify-between">
            <div>
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
            <div>
              <img
                className="rounded-lg w-24"
                src={MENUITEM_IMAGE_URL + res.card.info.imageId}
                alt="menuItemImage"
              ></img>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MenuItem;
