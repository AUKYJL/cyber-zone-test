"use client";

import React from "react";

import { useCardStore } from "@/store/card";

import { IProduct } from "../consts/consts";
import { cn } from "../lib/utils";

import { CardContent } from "./cardContent";

interface Props {
  className?: string;
  card: IProduct;
}

export const Card: React.FC<Props> = ({ className, card }) => {
  const setActiveCard = useCardStore((state) => state.setActiveCard);
  return (
    <div
      onClick={() => setActiveCard(card)}
      className={cn(
        "shadow-inner rounded-[20px] bg-white relative cursor-pointer hover:translate-y-[-10px] duration-300",
        className,
      )}
    >
      <CardContent {...card} />
    </div>
  );
};
