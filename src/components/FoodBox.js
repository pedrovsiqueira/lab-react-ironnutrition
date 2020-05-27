import React from 'react';
import 'bulma/css/bulma.css';

const FoodBox = ({ food, handleQuantity, handleAddTodaysFood }) => (
  <div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={food.image} alt="Alt" />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{food.name}</strong> <br />
            <small>{food.calories}</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input className="input" type="number" onChange={handleQuantity} />
          </div>
          <div className="control">
            <button id={(food.name, food.calories)} onClick={handleAddTodaysFood} className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>
);
export default FoodBox;
