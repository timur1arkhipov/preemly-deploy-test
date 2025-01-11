  import React from "react"; // Add this line
  import ReactDOM from "react-dom/client";
  import "./index.css";
  import App from "./App";
  import { Auth0Provider } from "@auth0/auth0-react";
  const domain = "dev-hiwm6xv136r7yzch.us.auth0.com";
  const clientId = "TEIKAz5dnBhTiOjRkNsjMHehoZtsC3Ku";

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "https://dev-hiwm6xv136r7yzch.us.auth0.com/api/v2/", // Your API
          scope: "read:events write:events offline_access",
        }}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  );
