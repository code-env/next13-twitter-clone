"use client";

import { SessionProvider } from "next-auth/react";

const Provider = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);

export default Provider;
