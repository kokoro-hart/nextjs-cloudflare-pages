import { notFound } from "next/navigation";

import { client } from "@/app/libs";

import type { GetBlogRequestParams, GetBlogsRequestParams, GetBlogsResponse } from "../types";

export const getBlogs = async (params: GetBlogsRequestParams = {}) => {
  return await client
    .getList<GetBlogsResponse["contents"][number]>({
      endpoint: "blogs",
      ...params,
    })
    .catch(notFound);
};

export const getBlog = async (params: GetBlogRequestParams) => {
  return await client
    .getListDetail<GetBlogsResponse["contents"][number]>({
      endpoint: "blogs",
      ...params,
    })
    .catch(notFound);
};
