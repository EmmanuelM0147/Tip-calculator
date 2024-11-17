import React, { useState } from 'react';

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [yourRating, setYourRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  const calculateTip = () => {
    const averageTipPercentage = (yourRating + friendRating) / 2;
    return (bill * averageTipPercentage) / 100;
  };

  const reset = () => {
    setBill(0);
    setYourRating(0);
    setFriendRating(0);
  };

  return (
      <div>
        <div>
          <label>How much was the bill?</label>
          <input
              type="number"
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
          />
        </div>
        <div>
          <label>How did you like the service?</label>
          <select
              value={yourRating}
              onChange={(e) => setYourRating(Number(e.target.value))}
          >
            <option value={0}>Dissatisfied (0%)</option>
            <option value={5}>It was okay (5%)</option>
            <option value={10}>It was good (10%)</option>
            <option value={15}>Absolutely (20%)</option>
          </select>
        </div>
        <div>
          <label>How did your friend like the service?</label>
            <select
                value={friendRating}
                onChange={(e) => setFriendRating(Number(e.target.value))}
            >
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={15}>Absolutely amazing! (15%)</option>
            </select>
        </div>
          <h3>
              You pay ${(bill + calculateTip()).toFixed(2)} (${bill.toFixed(2)} + ${calculateTip().toFixed(2)} tip)
          </h3>
          <button onClick={reset}>Reset</button>
      </div>
  );
}

export default TipCalculator;
