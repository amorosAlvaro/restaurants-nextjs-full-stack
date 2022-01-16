/* eslint-disable no-unused-vars */
import Head from 'next/head';
import { getData } from '../services/fetchData';
import { useState } from 'react';

const Home = (props) => {
  const [restaurants, setRestaurants] = useState(props);
  console.log('restaurants in home como:', restaurants.restaurants);

  return (
    <Head>
      <title>Home</title>
    </Head>
  );
};

export async function getServerSideProps() {
  const res = await getData('restaurants');
  return {
    props: { restaurants: res.restaurants, result: res.result },
  };
}
export default Home;
