import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
// import "./fonts/San Francisco Pro Display/SF-Pro-Display-Regular.ttf";
// import "./fonts/San Francisco Pro Display/SF-Pro-Display-Medium.ttf";
// import "./fonts/San Francisco Pro Display/SF-Pro-Display-Semibold.ttf";
// import "./fonts/San Francisco Pro Display/SF-Pro-Display-Bold.ttf";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider>
  </BrowserRouter>,
);
