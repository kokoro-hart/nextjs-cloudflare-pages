export const runtime = "edge";

import { Suspense } from "react";

import { Link, Loading } from "@/app/components/elements";
import { Blogs } from "@/app/features/blogs";
import { CategoryFilter, getCategories } from "@/app/features/categories";
import { getPath } from "@/app/utils";

import styles from "./page.module.scss";

export default async function Home() {
  const categories = await getCategories();
  return (
    <div className={styles.wrapper}>
      <Link href={getPath.static()}>Static Page</Link>
      <CategoryFilter categories={categories.contents} />
      <Suspense fallback={<Loading />}>
        <Blogs />
      </Suspense>
    </div>
  );
}
