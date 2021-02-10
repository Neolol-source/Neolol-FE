/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { verifyInit } from '../../services/apiRouterService';

function Post({ id }) {
  console.log(id);
  return (
    <div className="container">
      <Head>
        <title>Neolol - The funniest place on the internet!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1>
          Post id
          {id}
        </h1>
      </Layout>
    </div>
  );
  // Render post...
}

export async function getServerSideProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const [resp, status] = await verifyInit();
  if (status === 200) {
    console.log(resp);
    // if user is logged in, call api for user data
    // const [userdata, userStatus] = await getUserData();
    // return { props: { userdata } };
  }
  // Pass post data to the page via props
  return { props: { id: params.id, verifyStatus: status } };
}

export default Post;
