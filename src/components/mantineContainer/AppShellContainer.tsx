import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { Suspense } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

function AppShellContainer() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Suspense>
      <AppShell
        header={{ height: { base: 60, md: 70, lg: 80 } }}
        navbar={ {
          width:{ base: 200, md: 250, lg: 250 },
          breakpoint: "sm",
          collapsed: { mobile: !opened, desktop: opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Header opened={opened} toggle={toggle} />
        </AppShell.Header>
<AppShell.Navbar>
          <Navbar />
        </AppShell.Navbar>
        
        <AppShell.Main bg={"var(--mantine-color-gray-1)"}>
        <Outlet />
        </AppShell.Main>
      </AppShell>
    </Suspense>
  );
}

export default AppShellContainer;
