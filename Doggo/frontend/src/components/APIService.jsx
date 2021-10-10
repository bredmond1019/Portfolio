import base64 from "base-64";

// To access these other API routes, must have in the headers:
//         "Authorization:Bearer <token>"

export class APIService {
	static async SignUp(credentials) {
		const data = await fetch("http://localhost:5000/api/v1/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		});
		return await data.json();
	}

	static async LogIn(credentials) {
		const data = await fetch("http://localhost:5000/api/v1/tokens", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Basic ${base64.encode(
					`${credentials.email}:${credentials.password}`
				)}`,
			},
		});
		return await data.json();
	}
	static async GoogleLogIn(credentials) {
		const data = await fetch("http://localhost:5000/api/v1/tokens", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(credentials),
		});
		return await data.json();
	}
}
