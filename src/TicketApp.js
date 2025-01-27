import React from "react";
import { UiProvider } from "./context/UiContext";
import { RouterPage } from "./pages/RouterPage";
import { SockectProvider } from "./context/SocketContext";

export const TicketApp = () => {
  return (
    <SockectProvider>
      <UiProvider>
        <RouterPage />
      </UiProvider>
    </SockectProvider>
  );
};
