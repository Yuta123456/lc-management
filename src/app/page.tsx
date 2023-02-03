"use client";

import { userState } from "@/state/user";
import { login } from "@/utils/login";
import { Container, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  return (
    <Container maxW={"90vw"} margin="auto" padding="3.5rem 0">
      <Heading>管理画面</Heading>
    </Container>
  );
}
