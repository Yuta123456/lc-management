"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { userState } from "@/state/user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function LoginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, _] = useRecoilState(userState);
  const router = useRouter();
  useEffect(() => {
    if (user.user === null) {
      console.log("login privider");
      router.push("/login");
    }
  }, [router, user.user]);
  return <ChakraProvider>{children}</ChakraProvider>;
}
