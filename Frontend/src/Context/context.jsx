
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [chats, setChats] = useState();
  const [selectedChat, setSelectedChat] = useState();
 

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedInUser);
  }, []);

  return (
    
      {children}
    
  );
};

export { AuthContext, AuthProvider };
    