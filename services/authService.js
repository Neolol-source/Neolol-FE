/* eslint-disable import/no-mutable-exports */
export let loggedIn = false;

export function setLoggedIn(param) {
  loggedIn = param;
}

export async function goToLogin() {
  if (process.env.NODE_ENV === 'development') {
    window.location.href = '/admin-login';
    return;
  }
        window.location.href = 'https://marketplace.dev.qa.wegroup.be/login';
//   const baseApi = await fetchBaseAPi();
//   switch (baseApi) {
//     case 'https://api.phoenix.dev.qa.wegroup.be/':
//       window.location.href = 'https://marketplace.dev.qa.wegroup.be/login';
//       break;
//     case 'https://api.phoenix.dev.staging.wegroup.be/':
//       window.location.href = 'https://marketplace.dev.staging.wegroup.be/login';
//       break;
//     case 'https://api.phoenix.wegroup.be/':
//       window.location.href = 'https://marketplace.wegroup.be/login';
//       break;
//   }
// }
}