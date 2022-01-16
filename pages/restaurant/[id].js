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
  return {};
}

export default DetailRestaurant;
