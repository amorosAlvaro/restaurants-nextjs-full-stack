import React from 'react';
import Head from 'next/head';
import { getData } from '../../services/fetchData';

function DetailRestaurant() {
  return (
    <div>
      <Head>
        <title>Details</title>
      </Head>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`restaurants/${id}`);
  console.log(res.restaurant);
  return {
    props: { restaurant: res.restaurant },
  };
}
export default DetailRestaurant;
