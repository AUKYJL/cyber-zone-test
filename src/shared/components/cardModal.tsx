import React from "react";

import { useCardStore } from "@/store/card";

import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";

import { CardContent } from "./cardContent";

interface Props {
  className?: string;
}

export const CardModal: React.FC<Props> = ({ className }) => {
  const { activeCard, setActiveCard } = useCardStore();
  return (
    <>
      {activeCard && (
        <Dialog open={!!activeCard} onOpenChange={() => setActiveCard(null)}>
          <DialogContent>
            <DialogTitle></DialogTitle>
            <CardContent {...activeCard} />
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
