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
      result: "",
      
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
        result: this.state.userInput,
      });
      // console.log(translated);
    };
  }

  componentDidMount() {
    const response = this.props.result;
    console.log(response)
    const url = "https://restcountries.eu/rest/v2/name/" + "ro/";
    console.log(url);

    axios.get(url).then((res) => {
      const result = res.data;
      console.log(result);
      this.setState({ result });
    });

    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 2000);

    // console.log(this.state.result)
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

          {/* <textarea value={this.state.result} /> */}

        <Country data={this.state.result.map((country) => <li>{country.name}</li>)} />
        </form>
      </React.Fragment>
    );
  }
}
