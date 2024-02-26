"use client";

import { PropsWithChildren } from "react";

import { QueryProvider } from "./QueryProvider";

export const AppProvider = ({ children }: PropsWithChildren) => {
  return <QueryProvider>{children}</QueryProvider>;
};
