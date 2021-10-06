import { GoogleLogin } from "react-google-login";

import React from "react";

export default function GoogleAuth() {
	const onSuccess = (res) => {
		console.log("[Login Success] currentUser:", res.profileObj);
	};

	const onFailure = (res) => {
		console.log("[Login Failed] res:", res);
	};

	const googleResponse = (res) => {
		console.log(res);
		console.log(res.accessToken);
	};

	return (
		<div>
			<GoogleLogin
				clientId={process.env.GOOGLE_CLIENT_ID}
				buttonText="Log in with Google"
				onSuccess={googleResponse}
				onFailure={googleResponse}
				cookiePolicy={"single_host_origin"}
			/>
		</div>
	);
}
