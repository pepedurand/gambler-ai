"use client";
import { Flex, Image } from "@chakra-ui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useAuth } from "@/src/context/authContext";
import { primaryColor } from "@/src/types/colors";
import { LoginForm } from "@/src/components/loginForm";

export default function Login() {
  const { isUserLoggedIn } = useAuth();

  if (isUserLoggedIn) {
    return redirect("/");
  }

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justify="space-evenly"
      gap="40px"
      style={{ height: "100vh", width: "100vw" }}
      backgroundImage='url("/bet-background.png")'
      backgroundSize="cover"
    >
      <Image src="/logo.png" alt="Gambler AI" width="360px" />
      <LoginForm />
      <p style={{ marginTop: "20px" }}>
        Não tem uma conta?
        <Link
          style={{ color: primaryColor, marginLeft: "4px" }}
          href="/criar-conta"
        >
          Registre-se
        </Link>
      </p>
    </Flex>
  );
}
