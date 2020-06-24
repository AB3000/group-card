// /client/src/App.js
import React, { useState, useEffect, Component } from "react";
import request from "superagent";

// SERVICES
import cardService from "./services/cardService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.handleNameInput = this.handleNameInput.bind(this);
  }
  handleNameInput(e) {
    this.setState({
      name: e.target.value,
    });
  }
  handleSubmitName() {
    console.log("starting to submit profile");
    if (this.state.isFormFilledProfile) {
      console.log("Profile Form appears filled");
      const data = {
        name: this.state.name,
        description: ""
      };

      request
        .post("/api/card")
        .send(data)
        .set("Accept", "application/json")
        .end((err, res) => {
          if (err || !res.ok) {
            console.log("Oh no! err");
          } else {
            console.log("Success");
          }
        });
    }
  }

  // getCards = async () => {
  //   let res = await cardService.getAll();
  //   console.log(res);
  //   setcards(res);
  // };

  renderCard = (card) => {
    return (
      <li key={card._id} className="list__item card">
        <h3 className="card__name">{card.name}</h3>
        <p className="card__description">{card.description}</p>
      </li>
    );
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmitName}>
          <input
            onChange={this.handleNameInput}
            value={this.state.name}
          />
          <button type="Submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default App;
