import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Stack
      spacing={8}
      p={8}
      m="0 auto"
      className="App"
      w={"100vw"}
      h={"100vh"}
      minH={"100vh"}
      textColor={"white"}
    >
      {children}
    </Stack>
  );
}
