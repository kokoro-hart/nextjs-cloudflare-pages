export const runtime = "edge";

import Link from "next/link";

import { getBlog } from "@/app/features/blogs";
import { getPath } from "@/app/utils";

type BlogPageParams = Readonly<{
  params: {
    id: string;
  };
}>;

export default async function BlogPage({ params: { id } }: BlogPageParams) {
  const blog = await getBlog({ contentId: id });

  return (
    <main>
      <Link href={getPath.home()}>戻る</Link>
      <div
        dangerouslySetInnerHTML={{
          __html: blog.content,
        }}
      />
    </main>
  );
}
