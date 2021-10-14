import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import GA4React from "ga-4-react";

const ga4react = new GA4React("UA-206233061-1");
(async (_) => {
  await ga4react
    .initialize()
    .then((res) => console.log("Analytics Success"))
    .catch((err) => console.log("Analytics Failure"))
    .finally(() => {
      ReactDOM.render(
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>,
        document.getElementById("root")
      );
    });
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
