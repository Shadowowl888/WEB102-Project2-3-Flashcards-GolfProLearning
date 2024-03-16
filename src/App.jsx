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
  const [userInput, setUserInput] = useState("");
  const [userAnswer, setUserAnswer] = useState(-1);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const maxCards = cardStack.length;

  const showAnswer = () => { setCardAnswer(!cardAnswer) };

  const shuffle = () => {
    setCardStack(randomize(flashCards[0].stackCard));
    setCardNumber(0);
    setCardAnswer(false);
    setUserInput("");
    setUserAnswer(-1);
    setCorrectAnswers(0);
  }

  const nextCard = () => {
    if (cardNumber + 1 < maxCards) {
      setCardNumber(cardNumber + 1);
      setCardAnswer(false)
      setUserInput("");
      setUserAnswer(-1);
    }
  };

  const prevCard = () => {
    if (cardNumber > 0) {
      setCardNumber(cardNumber - 1);
      setCardAnswer(false);
      setUserInput("");
      setUserAnswer(-1);
    }
  };

  const checkAnswer = () => {
    let answer = cardStack[cardNumber].answer.toLowerCase();
    let userAnswer = userInput.toLowerCase();
    let match = 0;

    let answerCharCounts = {};
    let userCharCounts = {};

    for (let char of answer) {
      answerCharCounts[char] = (answerCharCounts[char] || 0) + 1;
    }

    for (let char of userAnswer) {
      userCharCounts[char] = (userCharCounts[char] || 0) + 1;
    }

    for (let char in answerCharCounts) {
      if (userCharCounts[char]) {
        match += Math.min(answerCharCounts[char], userCharCounts[char]);
      }
    }

    // answer.forEach((char) => {
    //   if (userAnswer.includes(char)) {
    //     match += 1;
    //   }
    // });

    if (Math.floor(match/answer.length * 100) > 80) {
      setCorrectAnswers(correctAnswers + 1);
    }

    console.log("Characters Matched:", match, "Answer Length:", answer.length, "User Anwer:", Math.floor(match/answer.length * 100));
    setUserAnswer(Math.floor(match/answer.length * 100));
  };

  return (
    <div className="App">

      <h1 className='card-set-title'>{flashCards[0].stackTitle}</h1>
      <h2 className='card-set-description'>{flashCards[0].stackDescription}</h2>
      <h4 className="card-set-description">Number of Cards: {maxCards}</h4>
      <div className="card-set-description">Correct Answers: {correctAnswers}</div>

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

      <div className="answer-input">
        <div className="answer-title">{(userAnswer > -1 ? `Your answer is ${userAnswer}% correct` : "Enter your answer")}</div>
        <input className="answer-box" type="text" placeholder="Enter Answer" value={userInput}
          onChange={(event) => {
            setUserInput(event.target.value);
            setUserAnswer(-1);
          }}
        />
        <button className="check-answer-button" onClick={checkAnswer}>Check Answer</button>
      </div>

      <div id="card-nav">
        <button onClick={prevCard} className={"card-navbutton " + (cardNumber > 0 ? "" : "button-inactive")}>{"<--"}</button>
        <div id="card-count">{cardNumber + 1} / {maxCards}</div>
        <button onClick={nextCard} className={"card-navbutton " + (cardNumber + 1 < maxCards ? "" : "button-inactive")}>{"-->"}</button>
      </div>
      <button className='card-navbutton' onClick={shuffle}>Restart & Shuffle</button>
      
    </div>
  )
}

export default App;