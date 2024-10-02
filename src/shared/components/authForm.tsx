"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { cn } from "../lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import { IFormInput } from "@/app/auth/page";

interface Props {
  className?: string;
  isLogin: boolean;
}

export const AuthForm: React.FC<Props> = ({ className, isLogin }) => {
  const router = useRouter();

  const testUser = {
    login: "test",
    password: "12345678",
  };

  const { register, handleSubmit, formState, watch } = useForm<IFormInput>({
    mode: "onChange",
  });
  const loginError = formState.errors.login?.message;
  const passwordError = formState.errors.password?.message;
  const [isFormError, setIsFormError] = useState(false);

  function onSubmit() {
    if (isLogin) {
      if (
        testUser.login === watch("login") &&
        testUser.password === watch("password")
      ) {
        setIsFormError(false);
        router.push("/");
      } else {
        setIsFormError(true);
      }
    } else {
      router.push("/");
    }
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-[53px]", className)}
      >
        <Input
          error={loginError}
          placeholder=" Введите логин"
          {...register("login", { required: "Логин обязателен" })}
        ></Input>
        <Input
          error={passwordError}
          placeholder=" Введите пароль"
          type="password"
          {...register("password", {
            required: "Пароль обязателен",
            minLength: {
              value: 8,
              message: "Минимум 8 символов",
            },
          })}
        ></Input>
        <Button
          variant={"form"}
          size={"sm"}
          disabled={!formState.isValid}
          className={cn("self-end")}
          type="submit"
        >
          {isLogin ? "Войти" : "Регистрация"}
        </Button>
      </form>
      {isFormError && (
        <p className="text-red-500 mt-2"> Неверный логин или пароль</p>
      )}
    </>
  );
};
