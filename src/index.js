import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Settings from "./components/Settings";
import Report from "./components/Report";
import EmailLogin from "./components/EmailLogin";
import store from "./redux/store";

function Main() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/report" element={<Report />} />
        </Routes>
      </Router>
    </Provider>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
