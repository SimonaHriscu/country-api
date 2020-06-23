import React from "react";
// import Result from "./Result"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(props.data);
  }

  render() {
    return (
      <React.Fragment>
        <h4> Result here:</h4>

        {this.props.data.map((country) => (
              <li>{country.name}</li>
            ))}
      </React.Fragment>
    );
  }
}
