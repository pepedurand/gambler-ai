"use client";

import GameSignal from "@/src/components/gameSignal";
import Header from "@/src/components/header";
import OpenGameModal from "@/src/components/openGameModal";
import { useAuth } from "@/src/context/authContext";
import { useValidateJsonKey } from "@/src/hooks/useValidateJsonKey";
import { Center, Flex } from "@chakra-ui/react";
import { redirect } from "next/navigation";

const gameName = "BacBo";

export default function BacBo() {
  const { isUserLoggedIn } = useAuth();
  const { isKeyValidated } = useValidateJsonKey(`hasDone${gameName}Setup`);
  if (!isUserLoggedIn) {
    return redirect("/entrar");
  }

  return (
    <Flex justify="center" direction="column" width="100vw">
      <Header />
      {!isKeyValidated && <OpenGameModal gameName={gameName} />}
      <Flex gap="40px" align="center" direction="column">
        <GameSignal gameTitle="Bac-Bo" possibleSigns={["sinal 1", "sinal 2"]} />
        <Center>
          <iframe
            style={{
              minHeight: "80vh",
              minWidth: "80vw",
              marginBottom: "40px",
            }}
            src="https://live.leon.red/frontend/evo/r2/"
          />
        </Center>
      </Flex>
    </Flex>
  );
}
