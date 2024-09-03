import React, { useState } from "react";

const TipButtons = ({ selected, setSelected }) => {
  const percentages = [5, 10, 15, 25, 50];
  const [customPercentage, setCustomPercentage] = useState("Custom");
  
  const handleClick = (value) => {
    setSelected(selected === value ? null : value);
  };

  const handleCustomChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      setCustomPercentage(value);
      setSelected(value);
    }
  };

  return (
    <div className="left__content">
      <label className="content__title--left">Select Tip %</label>
      <div className="content__buttons">
        {percentages.map((percentage) => (
          <button key={percentage} onClick={() => handleClick(percentage)} className={`buttons__button ${selected === percentage ? 'active' : ''}`}>
            {percentage}%
          </button>
        ))}
      
       <input
          type="number"
          onChange={handleCustomChange}
          placeholder="Custom"
          className={`buttons__button--input ${selected === customPercentage ? 'active' : ''}`}
       />
      
      </div>
    </div>
  );
};

export default TipButtons;
