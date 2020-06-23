import React from "react";
import Loading from "./components/Loading";
import Country from "./components/Country";
import axios from "axios"; 

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      loading: true,
      result: [],
    };
    
    this.handleChange = (e) => {
      this.setState({
        userInput: e.target.value.trim(),
      });
     // console.log(e.target.value.trim());
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      

      this.setState({
        result: "",
      });
      // console.log(translated);
    };
  }
  componentDidMount() {
    
    const url =
  "https://restcountries.eu/rest/v2/name/" +
   "col/";
   console.log(url);

    axios.get(url)
    .then(res => {
      const countryList = res.data;
      console.log(countryList)
      this.setState({ 
        result: countryList.map(country => <li>{country[1]}</li>)});
      })
      console.log(this.state.result);

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);
  }

  // fetch result
  // let { name, capital, topLevelDomain, timezones, languages } = item;
  // this.setState({
  //   name,
  //   capital,
  //   topLevelDomain,
  //   timezones,
  //   languages,
  //   loading: false,
  // });

  render() {
    if (this.state.loading) return <Loading />;
    return (
      <React.Fragment>
        <h1>Country App</h1>

        <form onChange={this.handleSubmit}>
          <textarea
            value={this.state.userInput}
            onChange={this.handleChange}
            placeholder="Type your text here:"
          />
          {/* <ul>
            
{ this.state.result.filter(country => <li>{country.name}</li>)}
          </ul> */}
          {/* <textarea value={this.state.result} /> */}
        </form>

        <Country data="sendSomething" />
      </React.Fragment>
    );
  }
}