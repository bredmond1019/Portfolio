import { GoogleLogin } from "react-google-login";

import React from "react";

export default function GoogleAuth() {
  const onSuccess = (res) => {
    console.log(
      "[Login Success] currentUser:",
      res.profileObj
    );
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
