export class APIService {
  static SignIn(request, credentials) {
    return fetch(`http://localhost:5000/auth/${request}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
}
