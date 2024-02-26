"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

import { Link } from "@/app/components/elements";
import { getPath } from "@/app/utils";

import { useGetBlogs } from "..";

export const Blogs = () => {
  const searchParams = useSearchParams();
  const filters = searchParams.get("filters");

  const {
    data: { contents },
  } = useGetBlogs({
    params: filters || "",
  });

  return (
    <ul>
      {contents.map(({ id, title, category }) => (
        <li key={id}>
          <Link href={getPath.blog(id)}>{title}</Link>
          {category[0]?.name}
        </li>
      ))}
    </ul>
  );
};
