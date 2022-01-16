import Head from 'next/head';
import { getData } from '../services/fetchData';
import { useState } from 'react';
import RestaurantItem from '../components/RestaurantItem';

const Home = (props) => {
  const [restaurants, setRestaurants] = useState(props.restaurants);
  console.log('restaurants in home como:', restaurants);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant._id} restaurant={restaurant} />
      ))}
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
