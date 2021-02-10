/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import fetch from 'isomorphic-fetch';
import { setLoggedIn } from './authService';
import envFile from '../public/env/env.json';

const  baseAPI = envFile.API;

const headers = {
  Accept: 'application/vnd.api+json',
};

export async function fetchBaseAPi() {
  return baseAPI;
}

async function _request(path, method, payload) {
  const API = baseAPI || await fetchBaseAPi();
  const url = API + path;
  let req;
  // console.log(`[API REQUEST] ${method} ${path}`);
  if (payload === null) {
    req = await fetch(`${url}`, {
      method,
      headers,
      credentials: 'include',
    });
  } else {
    req = await fetch(`${url}`, {
      method,
      headers,
      body: payload instanceof FormData ? payload : JSON.stringify(payload),
      credentials: 'include',
    });
  }

  // console.log(`[API RESPONSE] ${method} ${path} status: ${req.status}`);
  const resp = await req.json();
  return [resp, req.status];
}

export async function logout() {
  const path = 'v1/api/aut/v1/api/logout';
  const [resp, status] = await request(path, 'GET');
  if (status === 200) {
    setLoggedIn(false);
  } else {
    console.error(resp, status);
  }
}

export async function refresh() {
  const path = 'v1/api/aut/v1/api/auth/refresh';
  const [resp, status] = await request(path, 'POST', {});
  if (status > 201) {
    logout();
    return;
  }
  return [resp, status];
}

export async function request(path, method, payload = null) {
  let [resp, status] = await _request(path, method, payload);
  if (status === 401) {
    if (resp.msg === 'INVALID_TOKEN') {
      await logout();
    } else if (resp.msg === 'AUTHENTICATION_EXPIRED') {
      await refresh();
      [resp, status] = await _request(path, method, payload);
    }
  }
  return [resp, status];
}
