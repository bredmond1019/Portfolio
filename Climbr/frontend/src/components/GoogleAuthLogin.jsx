import { GoogleLogin } from "react-google-login";

import React from "react";
import { APIService } from "./APIService";
import { useToken } from "./TokenProvider";

export default function GoogleAuth(props) {
  const { saveToken } = useToken();

  const onSuccess = async (googleData) => {
    const credentials = {
      email: googleData.profileObj.email,
      token: googleData.accessToken,
      password: googleData.profileObj.googleId,
      google: true,
    };

    const response = await APIService.GoogleLogIn(credentials);
    console.log(response);
    saveToken(credentials.token);

    console.log("[Login Success] currentUser:", googleData.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
