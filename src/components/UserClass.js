import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.Name + "constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.Name + " componentDidMount");
  }

  render() {
    const { Name, Email } = this.props;
    console.log(Name + " render");
    return (
      <div>
        <h3>{Name}</h3>
        <h4>{Email}</h4>
        <h4>Counter: {this.state.count}</h4>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count++
        </button>
      </div>
    );
  }
}

export default UserClass;
