import type { CustomRequestInit, MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";

import { client } from "@/app/libs";

import { Blog } from "../types";

type getBlogsArgs = {
  queries?: MicroCMSQueries;
  customRequestInit?: CustomRequestInit;
};
export const getBlogs = async ({ queries, customRequestInit }: getBlogsArgs = {}) => {
  return await client
    .getList<Blog>({
      endpoint: "blogs",
      queries,
      customRequestInit,
    })
    .catch(notFound);
};

type getBlogArgs = {
  contentId: string;
  queries?: MicroCMSQueries;
  customRequestInit?: CustomRequestInit;
};
export const getBlog = async ({ contentId, queries, customRequestInit }: getBlogArgs) => {
  return await client
    .getListDetail<Blog>({
      endpoint: "blogs",
      contentId,
      queries,
      customRequestInit,
    })
    .catch(notFound);
};
