import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout';
import { verifyInit } from '../../services/apiRouterService';

const Help = () => (
  <div className="container">
    <Head>
      <title>HUGECLONE - Fresh</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Layout>
      <h1 className="title">
        Welcome to the HugeClone help page
      </h1>
    </Layout>
  </div>
);

export async function getServerSideProps() {
  // Pass post data to the page via props
  const [resp, status] = await verifyInit();
  // Check if user is logged in
  if (status === 200) {
    console.log(resp);
    // if user is logged in, call api for user data
    // const [userdata, userStatus] = await getUserData();
    // return { props: { userdata } };
  }
  return { props: { verifyStatus: status } };
}

export default Help;
