"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { userState } from "@/state/user";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { login } from "@/utils/login";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function LoginProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useRecoilState(userState);
  const router = useRouter();
  useEffect(() => {
    if (user.user === null) {
      login(undefined, setUser).catch(() => {
        router.push("/login");
      });
    }
  }, [router, user.user, setUser]);
  return <ChakraProvider>{children}</ChakraProvider>;
}
