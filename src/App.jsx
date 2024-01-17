import { cardImages } from "./data";

function App() {
  function handleGenerateCards() {
    const cardsFullLength = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    console.log(cardsFullLength);
  }

  return (
    <div>
      <h1>Pair Up</h1>
      <button onClick={handleGenerateCards}>New Game</button>
    </div>
  );
}

export default App;

/**const cardsFullLength = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    console.log(cardsFullLength); */
