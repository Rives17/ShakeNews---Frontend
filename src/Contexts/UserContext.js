import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("session") || sessionStorage.getItem("session"))
  );

  const superSetUser = (value, storageType) => {
    setUser(value);
      if (storageType === "local" || localStorage.getItem("session")) {
        localStorage.setItem("session", JSON.stringify(value || ""));

      }else {
        sessionStorage.setItem("session", JSON.stringify(value || ""));
      }
  };

  return (
    <UserContext.Provider value={[user, superSetUser]}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
