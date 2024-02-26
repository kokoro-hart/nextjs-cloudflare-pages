import { Link } from "@/app/components/elements";
import { getPath } from "@/app/utils";

import { getBlogs } from "..";

import styles from "./Blogs.module.scss";

type BlogsProps = {
  searchParams: {
    filters?: string;
  };
};
export const Blogs = async ({ searchParams }: BlogsProps) => {
  const { contents } = await getBlogs({
    queries: {
      filters: searchParams.filters || "",
    },
    customRequestInit: {
      cache: "no-store",
    },
  });

  return (
    <ul className={styles.list}>
      {contents.map(({ id, title, category }) => (
        <li key={id} className={styles.item}>
          <Link href={getPath.blog(id)}>{title}</Link>
          {category[0]?.name}
        </li>
      ))}
    </ul>
  );
};
