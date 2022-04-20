import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProfileProvider from "./providers/profile.provider";
import UserProvider from "./providers/user.provider";
import SearchProvider from "./providers/search.provider";
import TokenProvider from "./providers/token.provider";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <TokenProvider>
      <UserProvider>
        <ProfileProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </ProfileProvider>
      </UserProvider>
    </TokenProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
