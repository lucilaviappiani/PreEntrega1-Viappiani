import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import "./styles/CartWidget.css";
import "./styles/NavBar.css";
import "./styles/ItemCount.css";
import "./styles/ItemListContainer.css";
import "./styles/ItemList.css";
import "./styles/Item.css";
import "./styles/ItemDetail.css";
import "./styles/Cart.css";
import "./styles/Home.css";
import "./styles/Loading.css";
import 'bootstrap/dist/css/bootstrap.min.css';


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC_Ak1yE2xLNw1M9COPGxtyUXZW1EeuCfM",
  authDomain: "develover-cc857.firebaseapp.com",
  projectId: "develover-cc857",
  storageBucket: "develover-cc857.appspot.com",
  messagingSenderId: "999966721586",
  appId: "1:999966721586:web:05557f1a7909911dc05e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service

export default app;


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
