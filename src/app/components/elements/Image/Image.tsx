import { ComponentPropsWithoutRef } from "react";

export type ImageProps = ComponentPropsWithoutRef<"img">;

export const Image = ({ alt = "", decoding = "async", loading = "lazy", ...props }: ImageProps) => {
  return <img alt={alt} decoding={decoding} loading={loading} {...props} />;
};
