import React, { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

function UserProvider({ children }) {
  const getToken = () => {
    const authToken = localStorage.getItem("auth-token");
    console.log(authToken);
    return authToken;
  };

  //

  const [token, setToken] = useState(getToken());
  const [userId, setUserId] = useState(null);
  const [profileId, setProfileId] = useState(null);

  const saveToken = (userToken) => {
    setToken(userToken);
    localStorage.setItem("auth-token", userToken);
  };

  const logout = () => {
    localStorage.clear("auth-token");
    setToken(false);
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
