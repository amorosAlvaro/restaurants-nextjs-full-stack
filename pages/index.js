/* eslint-disable no-unused-vars */
import Head from 'next/head';
import { getData } from '../services/fetchData';
import { useState } from 'react';

const Home = (props) => {
  const [restaurants, setRestaurants] = useState(props);
  console.log('restaurants in home como:', restaurants.restaurants);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {restaurants.length === 0 ? (
        <h2>No restaurants found...</h2>
      ) : (
        restaurants.map((restaurant) => {
          <RestaurantItem key={restaurant._id} restaurant={restaurant} />;
        })
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const res = await getData('restaurants');
  return {
    props: { restaurants: res.restaurants, result: res.result },
  };
}
export default Home;
