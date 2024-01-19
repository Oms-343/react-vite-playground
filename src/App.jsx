import { useState } from "react";

import { cardImages } from "./data";

function App() {
  const [cards, setCards] = useState([]);

  function handleGenerateCards() {
    const cardsFullLength = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(cardsFullLength);
  }

  return (
    <div className="App">
      <h1>Pair Up</h1>
      <button onClick={handleGenerateCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card-img" />
              <img src="/app-images/cover.png" alt="cover-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
