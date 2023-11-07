import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9NgVb2-JqPgSi54PQiuipP-zgzcSkuBk",
  authDomain: "ga4-sandbox-f367c.firebaseapp.com",
  projectId: "ga4-sandbox-f367c",
  storageBucket: "ga4-sandbox-f367c.appspot.com",
  messagingSenderId: "143421958396",
  appId: "1:143421958396:web:c0af9f90ad6a80f5c9cf79",
  measurementId: "G-KGCK0N9DD5",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
