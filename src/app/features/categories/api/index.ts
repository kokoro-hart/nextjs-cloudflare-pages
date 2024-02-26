import type { MicroCMSQueries } from "microcms-js-sdk";
import { notFound } from "next/navigation";

import { client } from "@/app/libs";

import { GetCategoriesResponse } from "../types";

export const getCategories = async (queries?: MicroCMSQueries) => {
  return await client
    .getList<GetCategoriesResponse["contents"][number]>({
      endpoint: "categories",
      queries,
    })
    .catch(notFound);
};
