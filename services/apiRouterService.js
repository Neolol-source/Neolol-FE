import { request } from './httpSessionService';

/* * * * * * * * * * * * * * *
 * AUTHENTICATION
 * * * * * * * * * * * * * * */

export async function auth(email, password) {
  const path = '//auth';
  const [resp, status] = await request(path, 'POST', {
    email,
    password,
  });
  return [resp, status];
}

export async function verifyInit() {
  /*
   * the verify method that is called on page load
   * it checks if you have cookies set.
   *
   * if there are expired cookies, renew them and go to dashboard
   * if no cookies found redirect to login page
   */
  const path = '/verify';
  const [resp, status] = await request(path, 'GET');
  if (status === 401) {
    if (resp.msg === 'NOT_AUTHENTICATED' || resp.msg === 'INVALID_TOKEN') {
      window.location.href = '/logout';
    }
  }
  return [resp, status];
}

export async function getUserData() {
  const path = '/user';
  const [resp, status] = await request(path, 'GET');
  return [resp, status];
}

export async function logout() {
  const path = '/logout';
  const [resp, status] = await request(path, 'GET');
  return [resp, status];
}
