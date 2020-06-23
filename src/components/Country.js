import React from "react";
// import Result from "./Result"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <h4>Result here:
         
         {/* <ul>
        { this.state.result.map(country => <li>{country.name}</li>)}
      </ul>  */}
        </h4>
      </React.Fragment>
    );
  }
}