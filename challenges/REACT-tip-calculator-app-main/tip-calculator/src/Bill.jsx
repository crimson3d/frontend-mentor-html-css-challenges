import React, { useState } from 'react';

const Bill = ({amount, setAmount}) => {
    const handleChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <div className="left__content">
            <label htmlFor="money" className="content__title--left">Bill</label>
            <input
                type="number"
                id="money"
                value={amount}
                onChange={handleChange}
                placeholder='0'
                className="content__input" 
            />
        </div>
    );
}

export default Bill;