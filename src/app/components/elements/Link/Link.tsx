import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { SomeRequired } from "@/app/types";

export type LinkProps =
  | PropsWithChildren<NextLinkProps>
  | SomeRequired<ComponentPropsWithoutRef<"a">, "href">;

export const Link = ({ href, children, ...props }: LinkProps) => {
  if (typeof href === "string" && "target" in props) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
};
