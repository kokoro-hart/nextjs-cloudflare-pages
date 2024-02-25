import Link from "next/link";

import { getBlogs } from "@/app/features/blogs";

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main>
      <h1 className="text-2xl font-bold my-4">ブログ</h1>
      <ul>
        {blogs.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
