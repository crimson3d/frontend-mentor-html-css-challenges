import React, { useState, useEffect } from "react";

const Results = ({
  amount,
  selected,
  people,
  setAmount,
  setSelected,
  setPeople,
}) => {
  const tipPerPerson = () => {
    if (amount > 0 && selected !== null && people > 0) {
      const tipAmount = (amount * selected) / 100;
      return (tipAmount / people).toFixed(2);
    }
    return "0.00";
  };

  const totalPerPerson = () => {
    if (amount > 0 && selected !== null && people > 0) {
      const totalAmount = amount / people + parseFloat(tipPerPerson());
      return totalAmount.toFixed(2);
    }
    return "0.00";
  };

  const resetValues = () => {
    setAmount(0);
    setSelected(null);
    setPeople(0);
  };

  return (
    <div className="card__right">
      <div className="right__right">
        <div className="right__content">
          <div className="content__title">
            <h2 className="title__first">Tip Amount</h2>
            <h2 className="title__second">/ person</h2>
          </div>
          <h2 className="content__total">${tipPerPerson()}</h2>
        </div>
        <div className="right__content">
          <div className="content__title">
            <h2 className="title__first">Total</h2>
            <h2 className="title__second">/ person</h2>
          </div>
          <h2 className="content__total">${totalPerPerson()}</h2>
        </div>
      </div>
      <button className="right__resetButton" onClick={resetValues}>
        Reset
      </button>
    </div>
  );
};

export default Results;
