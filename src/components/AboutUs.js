import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <>
        <h1>About Us</h1>
        <div>
          Logged In
          {/* example of using React context in class components */}
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass Name="child1" Email="Siddhanth@gmail.com"></UserClass>
        <UserClass Name="child2" Email="Siddhanth@gmail.com"></UserClass>
      </>
    );
  }
}

export default AboutUs;
