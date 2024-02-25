export const getPath = {
  home: () => "/",
  static: () => "/static",
  blog: (id: string) => `/blog/${id}`,
};
