import base64 from "base-64";

export class APIService {
  static SignIn(credentials) {
    return fetch("http://localhost:5000/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  static LogIn(credentials) {
    return fetch("http://localhost:5000/api/v1/tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${base64.encode(
          `${credentials.email}:${credentials.password}`
        )}`,
      },
    }).then((data) => data.json());
  }
}
