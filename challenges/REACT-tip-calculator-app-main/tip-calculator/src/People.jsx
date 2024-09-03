import React, { useState } from 'react';

const People = ({ people, setPeople, showMessage, setShowMessage }) => {

    const handleChange = (e) => {
        const value= Number(e.target.value);
        setPeople(e.target.value);
        if (value === 0) {
            setShowMessage(true);
        } else {
            setShowMessage(false);
        }
    };

    return (
        <div className="left__content">
            <div className='content__content'>
                <label htmlFor="people" className="content__title--left">Number of People</label>
                {showMessage && (
                    <p className='content__error'>Can`t be zero</p>
                )}
            </div>
            <input
                type="number"
                id="people"
                value={people}
                onChange={handleChange}
                className={`content__input ${showMessage ? 'content__input--error' : ''}`}
                placeholder='0'
            />
        </div>
    );
};

export default People;

