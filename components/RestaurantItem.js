import React from 'react';
import Link from 'next/link';

function RestaurantItem({ restaurant }) {
  const userLink = () => {
    return (
      <>
        <Link href={`restaurant/${restaurant._id}`}>
          <a className="btn btn-info" style={{ marginRight: '5px', flex: 1 }}>
            View
          </a>
        </Link>
        <button
          className="btn btn-success"
          style={{ marginLeft: '5px', flex: 1 }}
        >
          Favorites
        </button>
      </>
    );
  };

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
        <div className="row justify-content-between mx-0">{userLink()}</div>
      </div>
    </div>
  );
}

export default RestaurantItem;
