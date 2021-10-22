import { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [users, setUsers] = useState(() => {
    const item = localStorage.getItem("userData");
    return item ? JSON.parse(item) : "";
  });

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(users));
  }, [users]);

  return [users, setUsers];
}
