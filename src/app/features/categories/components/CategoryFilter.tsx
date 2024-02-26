"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/app/components/elements";
import { getPath } from "@/app/utils";

import { Category } from "..";

import styles from "./CategoryFilter.module.scss";

type CategoryFilterProps = {
  categories: Category[];
};
export const CategoryFilter = ({ categories }: CategoryFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters = searchParams.get("filters");
  const handleClick = (id: string) => {
    router.push(`${getPath.home()}?filters=category[contains]${id}`);
  };
  const handleClear = () => {
    router.push(getPath.home());
  };
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {categories.map(({ id, name }) => (
          <li key={id} className={styles.item}>
            <Button
              type="button"
              hasBorder={filters === `category[contains]${id}`}
              onClick={() => handleClick(id)}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
      <Button type="button" color="gray" onClick={handleClear}>
        クリア
      </Button>
    </div>
  );
};
