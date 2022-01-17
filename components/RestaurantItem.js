/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Link from 'next/link';
import { patchData } from '../services/fetchData';
import DataContext from '../store/GlobalContext';

function RestaurantItem({ restaurant }) {
  const [state, dispatch] = useContext(DataContext);
  const { authentication } = state;
  console.log('AUTH:', authentication);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await patchData('user', restaurant, authentication.token);
    // console.log('res in component:', res);

    if (res.error) {
      return dispatch({ type: 'NOTIFY', payload: { error: res.error } });
    }

    if (res.message) {
      dispatch({ type: 'NOTIFY', payload: { success: true } });
    }
  };

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
          onClick={handleSubmit}
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
