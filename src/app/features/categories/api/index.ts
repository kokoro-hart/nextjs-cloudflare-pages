import type { MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";

import { client } from "@/app/libs";

import { Category } from "../types";

export const getCategories = async (queries?: MicroCMSQueries) => {
  return await client
    .getList<Category>({
      endpoint: "categories",
      queries,
      customRequestInit: {
        cache: "no-store",
      },
    })
    .catch(notFound);
};
