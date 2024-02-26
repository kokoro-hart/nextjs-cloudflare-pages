import { CustomRequestInit, MicroCMSQueries } from "microcms-js-sdk";

import { Blog } from ".";

export type GetBlogsRequestParams = {
  queries?: MicroCMSQueries;
  customRequestInit?: CustomRequestInit;
};

export type GetBlogsResponse = { contents: Blog[] };

export type GetBlogRequestParams = {
  contentId: string;
  queries?: MicroCMSQueries;
  customRequestInit?: CustomRequestInit;
};
