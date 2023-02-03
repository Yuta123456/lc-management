"use client";

import { userState } from "@/state/user";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import LoginProvider from "./loginProvider";
import Provider from "./privider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider>
          <LoginProvider>{children}</LoginProvider>
        </Provider>
      </body>
    </html>
  );
}
