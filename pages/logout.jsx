import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout';

const Logout = () => (
  <div className="container">
    <Head>
      <title>HUGECLONE - The funniest place on the internet!</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1 className="title">
        Logout here
      </h1>
    </Layout>
  </div>
);

export default Logout;
