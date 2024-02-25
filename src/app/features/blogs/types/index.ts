import { Category } from "@/app/features/categories";

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: {
    url: string;
    height: number;
    width: number;
  };
  category: Category[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};
