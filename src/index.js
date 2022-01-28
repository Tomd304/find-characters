import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./Main";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA28vwsTCrdpFL585ocyzJboLNmkdyztVY",
  authDomain: "character-finder-game.firebaseapp.com",
  projectId: "character-finder-game",
  storageBucket: "character-finder-game.appspot.com",
  messagingSenderId: "1065151861747",
  appId: "1:1065151861747:web:3267cfd357d30f2def7886",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
