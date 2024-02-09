import UserClass from "./UserClass";
import React from "react";
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
        <UserClass Name="child1" Email="Siddhanth@gmail.com"></UserClass>
        <UserClass Name="child2" Email="Siddhanth@gmail.com"></UserClass>
      </>
    );
  }
}

export default AboutUs;
