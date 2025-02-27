import React, { createContext } from "react";

import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SockectProvider = ({ children }) => {
  // const { socket, online } = useSocket("http://localhost:8080");
  const { socket, online } = useSocket("https://ticket-server-production-1fc8.up.railway.app/");

  return (
    <SocketContext.Provider value={{ socket, online }}>
      {children}
    </SocketContext.Provider>
  );
};
