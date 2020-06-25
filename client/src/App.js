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
      description: "", 
    };
    this.handleNewCard = this.handleNewCard.bind(this);
  }
  handleNewCard() {
    this.setState({
      name: "",
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
          <input type="hidden"
            onChange={this.handleNewCard}
            value={this.state.name}
          />
          <button type="Submit" value="test">
            Create a New Card
          </button>
        </form>
        <button>Go to Existing Card</button>
      </div>
    );
  }
}

export default App;
