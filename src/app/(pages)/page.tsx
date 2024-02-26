import { Suspense } from "react";

import { Link, Loading } from "@/app/components/elements";
import { Blogs } from "@/app/features/blogs";
import { CategoryFilter, getCategories } from "@/app/features/categories";
import { getPath } from "@/app/utils";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main>
      <Link href={getPath.static()}>Static Page</Link>
      <h1 className="text-2xl font-bold my-4">ブログ</h1>
      <CategoryFilter categories={categories.contents} />
      <Suspense fallback={<Loading />}>
        <Blogs />
      </Suspense>
    </main>
  );
}
