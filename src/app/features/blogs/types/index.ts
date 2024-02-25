export type Category = {
  id: string;
  name: string;
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: Category;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
