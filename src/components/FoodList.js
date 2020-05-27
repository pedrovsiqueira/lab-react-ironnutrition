import React from 'react';

const FoodList = ({ calories, quantity, name, totalcalories }) => {
  return (
    <div>
      <h1>Today's Foods</h1>
      <ul>
        <li>
          {quantity} {name} = {calories} cal
        </li>
      </ul>

      <p>Total: {totalcalories}</p>
    </div>
  );
};

export default FoodList;
