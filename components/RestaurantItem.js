import React from 'react';

function RestaurantItem({ restaurant }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img
        className="card-img-top"
        src={restaurant.image}
        alt={restaurant.title}
      />
      <div className="card-body">
        <h5 className="card-title">{restaurant.title}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default RestaurantItem;
