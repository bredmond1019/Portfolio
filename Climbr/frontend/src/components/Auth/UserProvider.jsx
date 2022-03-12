import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

function UserProvider({ children }) {
  const getToken = () => {
    const authToken = JSON.parse(localStorage.getItem("authToken"));
    return authToken;
  };

  const [token, setToken] = useState(getToken()?.userToken);
  const [tokenExpirationTime, setTokenExpirationTime] = useState(
    getToken()?.expirationTime && new Date(getToken().expirationTime) > new Date()
      ? new Date(getToken().expirationTime)
      : null
  );
  const [userId, setUserId] = useState(null);
  const [profileId, setProfileId] = useState(1);

  const saveToken = (userToken, expirationTime) => {
    const expiration = expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60);
    setToken(userToken);
    setTokenExpirationTime(expiration);

    localStorage.setItem(
      "authToken",
      JSON.stringify({
        userToken,
        expirationTime: expiration.toISOString(),
      })
    );
  };

  const logout = () => {
    localStorage.clear("authToken");
    setToken(false);
    setTokenExpirationTime(null);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        saveToken,
        userId,
        setUserId,
        profileId,
        setProfileId,
        logout,
        isLoggedIn: !!token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
