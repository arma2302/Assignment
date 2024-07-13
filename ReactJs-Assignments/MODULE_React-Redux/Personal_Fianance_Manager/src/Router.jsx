import React from "react";
// import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainComponent from "./MainComponent";
import { Provider } from "react-redux";
import { store } from "./app/store";

export default function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
