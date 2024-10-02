import React from "react";

interface Props {
  className?: string;
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <p className="text-[36px]">R-STORE</p>
    </div>
  );
};
