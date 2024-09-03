import React, { useState } from "react";
import "./App.css";
import Bill from "./Bill.jsx"
import TipButtons from "./TipButtons.jsx";
import People from "./People.jsx";
import Results from "./Results.jsx";



function App() {
  const [amount, setAmount] = useState('');
  const [selected, setSelected] = useState(null);
  const [people, setPeople] = useState('');
  const [showMessage, setShowMessage] = useState(false);

 

  return (
    <div className="main">
      <h1 className="main__title"><span className="main__title--split">SPLI</span><span className="main__title--split">TTER</span></h1>
      <div className="main__card">
        <div className="card__left">
          <Bill amount={amount} setAmount={setAmount} />
          <TipButtons selected={selected} setSelected={setSelected} />
          <People people={people} setPeople={setPeople} showMessage={showMessage} setShowMessage={setShowMessage} />
        </div>
        <Results amount={amount} selected={selected} people={people} setAmount={setAmount} setSelected={setSelected} setPeople={setPeople} />
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://crimson3d.github.io/frontend-mentor-html-css-challenges/index.html">
          José Antonio Sánchez
        </a>
        .
      </div>
    </div>
  );
}

export default App;
