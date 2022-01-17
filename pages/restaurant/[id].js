import React, { useState } from 'react';
import Head from 'next/head';
import { getData } from '../../services/fetchData';

function DetailRestaurant(props) {
  const [restaurant] = useState(props.restaurant);

  return (
    <div className="row detail_page">
      <Head>
        <title>Detail Product</title>
      </Head>

      <div className="col-md-6">
        <img
          src={restaurant.image}
          alt={restaurant.title}
          className="d-block img-thumbnail rounded mt-4 w-100"
          style={{ height: '350px' }}
        />
      </div>

      <div className="col-md-6 mt-3">
        <h2 className="text-uppercase">{restaurant.title}</h2>
        <h5 className="text-danger">Mean Price: ${restaurant.minCharge}</h5>
        <div className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>

        <button type="button" className="btn btn-dark d-block my-3 px-5">
          Favorites
        </button>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`restaurants/${id}`);
  return {
    props: { restaurant: res.restaurant },
  };
}
export default DetailRestaurant;
