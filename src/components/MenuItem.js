import vegIcon from "../images/veg-icon.png";
import nonVegIcon from "../images/non-veg-icon.png";

const MenuItem = (props) => {
  const { title, length, vegOnlyFlag } = props;
  let { menuDetails } = props;

  if (vegOnlyFlag)
    menuDetails = menuDetails.filter(
      (item) => item.card.info.itemAttribute.vegClassifier === "VEG"
    );
  return (
    <div className="menuItem">
      <h5>{title + " (" + length + ")"}</h5>
      <ul>
        {menuDetails.map((res) => (
          <li>
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
            )}{" "}
            {res.card.info.name}
          </li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default MenuItem;
