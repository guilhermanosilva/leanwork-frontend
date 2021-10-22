import { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const userContext = createContext();

export default function UserProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useLocalStorage();

  return (
    <userContext.Provider
      value={{ users, setUsers, isModalOpen, setIsModalOpen }}
    >
      {children}
    </userContext.Provider>
  );
}
