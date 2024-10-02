"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "../lib/utils";
import { Button } from "../ui/button";

import { Container } from "./container";
import { Logo } from "./logo";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <header className={cn("py-10", className)}>
      <Container className="flex justify-between items-center ">
        <Logo />
        <Link href="/auth">
          <Button>{isLoggedIn ? "Выйти" : "Войти"}</Button>
        </Link>
      </Container>
    </header>
  );
};
