export const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// import '../declarations.d';
// import { getAppJwt } from '../app/redux/auth/selectors';
// import { storeRegistry } from '../app/utils/storeRegistry';
//
// declare global {
//   interface Window {
//     API_URL: string;
//   }
// }
//
// export const postCore = async (url: string, data = {}, jwt: string | null = null) => {
//   const fullUrl = `${window.API_URL}/v1/${url}`;
//
//   const response = await fetch(fullUrl, {
//     method: 'POST',
//     // type: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${jwt || getAppJwt(storeRegistry.getState())}`
//     },
//     body: JSON.stringify(data)
//   });
//
//   const result = await response.json();
//
//   if (response.status !== 200) {
//     throw new Error(result.message);
//   }
//
//   return result;
// };
//
// export const getCore = async (url: string, jwt: string | null = null) => {
//   const fullUrl = `${window.API_URL}/v1/${url}`;
//
//   const response = await fetch(fullUrl, {
//     method: 'GET',
//     // type: 'cors',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${jwt || getAppJwt(storeRegistry.getState())}`
//     }
//   });
//
//   const result = await response.json();
//
//   if (response.status !== 200) {
//     throw new Error(result.message);
//   }
//
//   return result;
// };
