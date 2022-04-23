import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import CountScreen from "./src/screen/CountScreen";


// Wrap whole screen in a provider
const App = () => {
  return (
    <Provider store={store}>
      <CountScreen />
    </Provider>
  );
};


export default App;
