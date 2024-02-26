import { useSuspenseQuery } from "@tanstack/react-query";

import { GetBlogsResponse, GetClientSideRequestParams } from "..";

const getBlogs = async ({ params }: GetClientSideRequestParams): Promise<GetBlogsResponse> => {
  const res = await fetch(`/api/blogs/?filters=${params}`);
  return res.json();
};

export const useGetBlogs = (params: GetClientSideRequestParams) => {
  return useSuspenseQuery({
    queryKey: ["blogs", params],
    queryFn: () => getBlogs(params),
  });
};
