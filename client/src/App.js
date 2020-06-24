// /client/src/App.js
import React, { useState, useEffect } from "react";

// SERVICES
import cardService from './services/cardService';

function App() {
  const [cards, setcards] = useState(null);

  useEffect(() => {
    if(!cards) {
      getCards();
    }
  })

  const generateLink = link => { //for generating a unique link
      
      return 0; 
  }

  const getCards = async () => {
    let res = await cardService.getAll();
    console.log(res);
    setcards(res);
  }

  const renderCard = card => {
    return (
      <li key={card._id} className="list__item card">
        <h3 className="card__name">{card.name}</h3>
        <p className="card__description">{card.description}</p>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        <button>Create a new card</button>
        <button>Go to existing card</button>
        {/* {(cards && cards.length > 0) ? (
          cards.map(card => renderCard(card))
        ) : (
          <p>No cards found</p>
        )} */}
      </ul>
    </div>
  );
}

export default App;