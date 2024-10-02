"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoExitOutline } from "react-icons/io5";

import { AuthForm } from "@/shared/components/authForm";
import { Container } from "@/shared/components/container";

export interface IFormInput {
  login: string;
  password: string;
}

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Container className="mt-20">
      <div className="py-[54px] px-[98px] bg-white w-[675px] mx-auto rounded-xl">
        <p className="text-[#241F5C] text-[36px] mb-[50px] relative">
          <Link href="/">
            <IoExitOutline className="absolute top-[50%] left-[-10px] -translate-x-[100%] -translate-y-[50%] rotate-180" />
          </Link>
          {isLogin ? "Вход" : "Регистрация"}
        </p>

        <AuthForm isLogin={isLogin} />

        <p
          className="text-[#241F5C] mt-5 cursor-pointer hover:text-[#241F5C]/90 text-sm text-right"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "У меня нет аккаунта" : "Уже есть аккаунт?"}
        </p>
      </div>
    </Container>
  );
};
export default Auth;
