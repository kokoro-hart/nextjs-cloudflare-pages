"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { getPath } from "@/app/utils";

import { Category } from "..";

type CategoryFilterProps = {
  categories: Category[];
};
export const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const router = useRouter();
  const handleClick = (id: string) => {
    router.push(`${getPath.home()}?filters=category[contains]${id}`);
  };
  const handleClear = () => {
    router.push(getPath.home());
  };
  return (
    <div>
      {categories.map(({ id, name }) => (
        <button key={id} type="button" onClick={() => handleClick(id)}>
          {name}
        </button>
      ))}
      <button type="button" onClick={handleClear}>
        クリア
      </button>
    </div>
  );
};
