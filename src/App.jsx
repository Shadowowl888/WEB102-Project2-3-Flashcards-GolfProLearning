import { useState } from 'react'
import './App.css'

import FlashCardList from './FlashCardList.jsx';
const flashCards = JSON.parse(FlashCardList);

function randomize(array) {
  for (let i = array.length-1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const App = () => {
  const [cardNumber, setCardNumber] = useState(0);
  const [cardStack, setCardStack] = useState(flashCards[0].stackCard);
  const [cardAnswer, setCardAnswer] = useState(false);

  const maxCards = cardStack.length;

  const showAnswer = () => { setCardAnswer(!cardAnswer); }

  const shuffle = () => {
    setCardStack(randomize(flashCards[0].stackCard));
    setCardNumber(0);
    setCardAnswer(false);
  }

  const nextCard = () => {
    if (cardNumber + 1 < maxCards) {
      setCardNumber(cardNumber + 1);
      setCardAnswer(false)
    }
  };

  const prevCard = () => {
    if (cardNumber > 0) {
      setCardNumber(cardNumber - 1);
      setCardAnswer(false);
    }
  };
  
  return (
    <div className="App">

      <h1 className='card-set-title'>{flashCards[0].stackTitle}</h1>
      <h2 className='card-set-description'>{flashCards[0].stackDescription}</h2>
      <h4 className="card-set-description">Number of Cards: {maxCards}</h4>

      <button className="card" onClick={showAnswer}>
        <div className={"flip-card" + (cardAnswer ? " showFlip" : "")}>
          <div className={"card-front" + (cardAnswer ? " card-hide" : "")}>
            <p className="card-side">Question</p>
            <p className="card-content">{cardStack[cardNumber].question}</p>
            <p className="card-corner">{cardNumber + 1}</p>
          </div>

          <div className={"card-back" + (cardAnswer ? "" : " card-hide")}>
            <p className="card-side">Answer</p>
            <p className="card-content">{cardStack[cardNumber].answer}</p>
            <p className="card-corner">{cardNumber + 1}</p>
          </div>
        </div>
      </button>
      
      <div id="card-nav">
        <button onClick={prevCard} className={"card-navbutton " + (cardNumber > 0 ? "" : "button-inactive")}>{"<--"}</button>
        <div id="card-count">{cardNumber + 1} / {maxCards}</div>
        <button onClick={nextCard} className={"card-navbutton " + (cardNumber + 1 < maxCards ? "" : "button-inactive")}>{"-->"}</button>
      </div>
      <button className='card-navbutton' onClick={shuffle}>Shuffle</button>
      
    </div>
  )
}

export default App;