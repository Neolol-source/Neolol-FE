/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { verifyInit } from '../../services/apiRouterService';

function Category({ catName }) {
  return (
    <div className="container">
      <Head>
        <title>HUGECLONE - The funniest place on the internet!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>
          Category name:
          {catName}
        </h1>
      </Layout>
    </div>
  );
  // Render post...
}

export async function getServerSideProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
    // Pass post data to the page via props
  const [resp, status] = await verifyInit();
  // Check if user is logged in
  if (status === 200) {
    console.log(resp);
    // if user is logged in, call api for user data
    // const [userdata, userStatus] = await getUserData();
    // return { props: { userdata } };
  // Pass post data to the page via props
  }
  return { props: { catName: params.catName, verifyStatus: status } };
}


export default Category;
