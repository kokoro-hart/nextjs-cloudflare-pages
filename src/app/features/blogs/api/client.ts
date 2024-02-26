import { useSuspenseQuery } from "@tanstack/react-query";

import { GetBlogsResponse } from "..";

type Test = { params: string };
const getBlogs = async ({ params }: Test): Promise<GetBlogsResponse> => {
  const res = await fetch(`/api/blogs/?filters=${params}`);
  return res.json();
};

export const useGetBlogs = (params: Test) => {
  return useSuspenseQuery({
    queryKey: ["blogs", params],
    queryFn: () => getBlogs(params),
  });
};
