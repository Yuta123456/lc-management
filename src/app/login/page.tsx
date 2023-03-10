"use client";

import { UserState, userState } from "@/state/user";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { login } from "@/utils/login";

export default function Home() {
  const [user, setUser] = useRecoilState(userState);
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  useEffect(() => {
    if (user.user) {
      router.push("/");
    }
  }, [router, user]);

  const handleSubmit = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      return;
    }
    setIsLoading(true);
    login(
      {
        email,
        password,
      },
      setUser
    )
      .then(() => {
        toast({
          title: "ログインに成功しました",
          status: "success",
          duration: 2000,
        });
      })
      .catch((err) => {
        console.log(err, "login/page.tsx");
        toast({
          title: "ログインに失敗しました",
          status: "error",
          duration: 2000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Center width={"100vw"} padding="3.5rem 0">
        <Center flexFlow={"column"}>
          <Heading color="teal.700">Login</Heading>
          <FormControl>
            <FormLabel color="teal.700">Email address</FormLabel>
            <Input
              type="email"
              placeholder="example@hoge.com"
              isRequired
              id="email"
              ref={emailRef}
              color="black"
            />
            <FormLabel color="teal.700">Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                isRequired
                ref={passwordRef}
                color="black"
                type={hiddenPassword ? "password" : "text"}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={() => {
                    setHiddenPassword((v) => {
                      return !v;
                    });
                  }}
                >
                  <Icon
                    as={hiddenPassword ? AiOutlineEye : AiOutlineEyeInvisible}
                  />
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button
              mt={4}
              onClick={handleSubmit}
              variant="solid"
              color={"teal.700"}
              isLoading={isLoading}
            >
              Login
            </Button>
          </FormControl>
        </Center>
      </Center>
    </main>
  );
}
