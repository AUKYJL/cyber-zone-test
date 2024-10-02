import React from "react";

import { IProduct } from "../consts/consts";

import { Card } from "./card";

interface Props {
  className?: string;
  categoryTitle: string;
  cards: IProduct[];
}

export const CardsList: React.FC<Props> = ({
  className,
  categoryTitle,
  cards,
}) => {
  return (
    <div className={className}>
      <h4 className="mb-4 text-gray-500">{categoryTitle}</h4>
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
