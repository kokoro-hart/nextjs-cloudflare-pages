export const runtime = "edge";

import Link from "next/link";

import { getBlogs } from "@/app/features/blogs";
import { CategoryFilter, getCategories } from "@/app/features/categories";

import { getPath } from "../utils";

type Props = {
  searchParams: {
    filters?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const blogs = await getBlogs({
    queries: {
      filters: searchParams.filters || "",
    },
    customRequestInit: {
      cache: "no-store",
    },
  });
  const categories = await getCategories();

  return (
    <main>
      <Link href={getPath.static()}>Static Page</Link>
      <h1 className="text-2xl font-bold my-4">ブログ</h1>
      <CategoryFilter categories={categories.contents} />
      <ul>
        {blogs.contents.map(({ id, title, category }) => (
          <li key={id}>
            <Link href={getPath.blog(id)}>{title}</Link>
            {category[0]?.name}
          </li>
        ))}
      </ul>
    </main>
  );
}
