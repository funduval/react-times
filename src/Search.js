import React, { Component } from 'react'; 
import logo from './greyTimes.jpg'; 
import './App.css'; 
import './Main.js'; 
import Results from './Results.js';
import Saved from"./Saved.js");


// Helper Function
var helpers = require("./utils/helpers");


class Search extends Component { 

state = {
    topic: "",
    start: "",
    end: "",
    results: [],
    error:""
  };

componentDidMount() {
    // API.getAllArticles()
    //   .then(res => this.setState({ start: res.data.message }))
    //   .catch(err => console.log(err));

        helpers.runQuery(this.state.searchTerm).then(function(data) {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
  }



handleInputChange = event => {
    this.setState({ topic: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticlesByDate(this.state.start)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

render() { 

return (

	<Container style={{ minHeight: "80%" }} id="#search">
        <h1 className="text-center">Search By Date</h1>
        <Alert
          type="danger"
          style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
        >
          {this.state.error}
        </Alert>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          start={this.state.start}
        />
        <SearchResults results={this.state.results} />
      </Container>
  
	  /*this component will need to share the click handler function with each grandchild module*/

); 

} 

} 

export { Search as default };

// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Results = require("./children/Results");

// Helper Function
var helpers = require("./utils/helpers");

// This is the main component
var Main = React.createClass({

  // Here we set the initial state of our component
  getInitialState: function() {
    return { searchTerm: "", results: "" };
  },

  // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
  // props or state
  componentDidUpdate: function(prevProps, prevState) {
    // If we have a new search term, run a new search
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("UPDATED");

      helpers.runQuery(this.state.searchTerm).then(function(data) {
        if (data !== this.state.results) {
          console.log(data);
          this.setState({ results: data });
        }
        // This code is necessary to bind the keyword "this" when we say this.setState
        // to actually mean the component itself and not the runQuery function.
      }.bind(this));
    }
  },
  setTerm: function(term) {
    this.setState({ searchTerm: term });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Address Finder!</h2>
            <p className="text-center">
              <em>Enter a landmark to search for its exact address (ex: "Eiffel Tower").</em>
            </p>
          </div>

          <div className="col-md-6">

            <Form setTerm={this.setTerm} />

          </div>

          <div className="col-md-6">

            <Results address={this.state.results} />

          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
