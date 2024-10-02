"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import { CardModal } from "@/shared/components/cardModal";
import { CardsList } from "@/shared/components/cardsList";
import { Container } from "@/shared/components/container";
import { ICategory } from "@/shared/consts/consts";

export default function Home() {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function getProducts() {
      await axios
        .get("http://localhost:8000/categories")
        .then((res) => {
          setCategories(res.data);
        })
        .catch((err) => console.log(err));
    }
    getProducts();
  }, []);

  return (
    <Container>
      {categories.map((category: ICategory) => (
        <CardsList
          className="mb-[80px]"
          key={category.title}
          categoryTitle={category.title}
          cards={category.products}
        />
      ))}

      <CardModal />
    </Container>
  );
}
