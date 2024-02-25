import type { MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";

import { client } from "@/app/libs";

import { Blog } from "../types";

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client
    .getList<Blog>({
      endpoint: "blogs",
      queries,
    })
    .catch(notFound);
};

export const getBlog = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client
    .getListDetail<Blog>({
      endpoint: "blogs",
      contentId,
      queries,
    })
    .catch(notFound);
};
