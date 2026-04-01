import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const currentUser = {
    id: 1,
    name: "John Doe",
    avatar: "https://www.w3schools.com/w3images/avatar2.png",
    role: "Designer, UI",
    city: "London, UK",
    birthday: "April 1, 1988",
  };

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}