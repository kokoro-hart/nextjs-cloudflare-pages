import Link from "next/link";

import { getBlogs } from "@/app/features/blogs";
import { getPath } from "@/app/utils";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main>
      <Link href={getPath.home()}>戻る</Link>
      <h1 className="text-2xl font-bold my-4">ブログ</h1>
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
