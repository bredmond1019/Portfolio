import { GoogleLogin } from "react-google-login";

import React from "react";
import { APIService } from "./APIService";
import { useToken } from "./TokenProvider";

export default function GoogleAuth(props) {
  const { saveToken } = useToken();

  const onSuccess = async (res) => {
    const credentials = {
      email: res.profileObj.email,
      token: res.accessToken,
      password: res.profileObj.googleId,
      google: true,
    };
    if (props.request === "register") {
      const response = await APIService.SignUp(credentials);
      if (!response.success) {
        return alert(
          "There was an error. The administrators have been notified. Please try again later."
        );
      }
    }
    saveToken(credentials.token);

    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res) => {
    console.log("[Login Failed] res:", res);
  };

  const googleResponse = (res) => {
    console.log(res);
    console.log(res.accessToken);
    console.log(res.profileObj.email);
    console.log(res.profileObj.googleId);
  };

  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={onSuccess}
        onFailure={googleResponse}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
