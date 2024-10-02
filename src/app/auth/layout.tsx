import React from "react";

import { Container } from "@/shared/components/container";
import { Logo } from "@/shared/components/logo";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container className="mt-[74px]">
        <Logo />
      </Container>
      <div>{children}</div>
    </>
  );
}
