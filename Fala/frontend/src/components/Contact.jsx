import React from "react";
import { useState, useEffect } from "react";

const Contact = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => console.log(resp))
      // .then((resp) => resp.json())
      // .then((resp) => setWord(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Component-Body container">
      <h1 className="title">Contact</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro
        maiores voluptate atque maxime, voluptas quis, nostrum earum neque
        laboriosam id et recusandae repudiandae consequatur omnis eligendi eaque
        fugiat molestiae.
      </p>
    </div>
  );
};

export default Contact;
