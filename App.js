import React from "react";
import Routes from "~/routes/index";
import store from "~/store";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />
      <Routes />
    </Provider>
  );
}
