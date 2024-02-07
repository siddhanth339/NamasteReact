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
            {console.log(res)}
            {res.card.info.itemAttribute.vegClassifier === "VEG" ? (
              <img
                width="20px"
                height="20px"
                src="https://img.icons8.com/?size=48&id=61083&format=png"
                alt="veg-icon"
              ></img>
            ) : (
              <img
                width="20px"
                height="20px"
                src="https://img.icons8.com/?size=48&id=61082&format=png"
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
