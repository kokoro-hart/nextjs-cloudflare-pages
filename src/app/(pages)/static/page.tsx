import Link from "next/link";

import { getBlogs } from "@/app/features/blogs";
import { getPath } from "@/app/utils";

import styles from "../page.module.scss";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <div className={styles.wrapper}>
      <Link href={getPath.home()}>戻る</Link>
      <ul>
        {blogs.contents.map(({ id, title, category }) => (
          <li key={id}>
            <Link href={getPath.blog(id)}>{title}</Link>
            {category[0]?.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
