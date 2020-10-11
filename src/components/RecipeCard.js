import React from 'react';
import '../styles/RecipeCard.css';

const RecipeCard = (props) => {
  const {
    name,
    image,
    category,
    label,
    price,
    description,
    onPaymentPress,
  } = props;
  return (
    <div
      className="card"
      style={{ width: '18rem', backgroundColor: '#FCF7F8' }}
    >
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-img-overlay d-flex">
        <button
          className="btn text-white align-self-center mx-auto"
          onClick={() => onPaymentPress(price)}
          style={{ backgroundColor: '#960018' }}
        >
          Pay {price} $
        </button>
      </div>
      <div className="card-body">
        <h5 className="card-title" style={{ color: '#230903' }}>
          {name}
        </h5>
        <p className="card-text" style={{ color: '#230903' }}>
          {description}
        </p>
        <div className="row">
          {category && (
            <div className="col-xs-4">
              <div
                className="container p-2 rounded font-italic"
                style={{ backgroundColor: '#FAA916' }}
              >
                {category}
              </div>
            </div>
          )}
          {label && (
            <div className="col-xs-4">
              <div
                className="container p-2 rounded font-italic"
                style={{ backgroundColor: '#90C2E7' }}
              >
                {label}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
