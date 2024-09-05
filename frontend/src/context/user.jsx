import { createContext, useState } from "react";

export const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [formUser, setFormUser] = useState({
    name: "",
    password: "",
    email: "",
  });
  return <UserContext.Provider value={{ formUser, setFormUser }}>{ children }</UserContext.Provider>;
};
