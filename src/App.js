import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/notecards").then( (results) => {
      if(results.status === 200) {
        results.json().then(setServerData);
      }
    });
  }, []);

  const alertAnswer = function() {
    alert(this.answerText);
  };

  const notecard = (card) => {
    return (
      <div>
        <h2>{card.title}</h2>
        <p>{card.questionText}</p>
        <button onClick={alertAnswer.bind(card)}>Show Answer</button>
      </div>
    );
  }

  return (
    <div className="App">
      {serverData && serverData.map(notecard)}
      {!serverData && "loading"}
    </div>
  );
}

export default App;
