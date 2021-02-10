/* eslint-disable react/prop-types */
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import getConfig from 'next/config';
import Layout from '../components/Layout';

const {
  publicRuntimeConfig: { API_URL }, // Available both client and server side
} = getConfig();
// import { verifyInit } from '../services/apiRouterService';

const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const resp = await fetch('/mockdata/getposts.json');
    setPosts(await resp.json());
    // console.log(verifyStatus);
  };

  useEffect(() => {
    getPosts();
    console.log(API_URL, '1');
    console.log(process.env.API_URL, '2');
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Neolol - The funniest place on the internet!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout currentPage="home">
        <h1>Welcome to Neolol! only dev</h1>
        <PostContainer>
          {posts.map((item) => (
            <Post key={item.id}>
              <PostImage src={item.url} alt="" />
              {JSON.stringify(item)}
            </Post>
          ))}
        </PostContainer>
      </Layout>
    </div>
  );
};

// export async function getServerSideProps() {
//   // Pass post data to the page via props
//   const [resp, status] = await verifyInit();
//   // Check if user is logged in
//   if (status === 200) {
//     console.log(resp);
//     // if user is logged in, call api for user data
//     // const [userdata, userStatus] = await getUserData();
//     // return { props: { userdata } };
//   }
//   return { props: { verifyStatus: status } };
// }

const PostContainer = styled.div``;
const Post = styled.div``;
const PostImage = styled.img``;

export default Home;
