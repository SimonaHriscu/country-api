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
        {/* <h4> Result here:</h4> */}
        <div className="container">
          {this.props.data.map((country) => (
            <div className="small-box">
              <h1>{country.name}</h1>
              <h2>
                <span>Capital : </span>
                {country.capital}
              </h2>
              <h3>
                <span>Region : </span>
                {country.region}
              </h3>
              <img alt="flag" src={country.flag} />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
