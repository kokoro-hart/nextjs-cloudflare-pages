import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { IconSeparateWindow } from "../../../assets/IconSeparateWindow";

import { Button } from "./Button";

export default { component: Button } as ComponentMeta<typeof Button>;

type Story = ComponentStoryObj<typeof Button> & { args: ComponentProps<typeof Button> };

export const Default: Story = {
  args: {
    children: "FLAT採用サイト",
  },
};
export const WidthFull: Story = {
  args: {
    width: "full",
    children: "FLAT採用サイト",
  },
};
export const GrayBorder: Story = {
  args: {
    children: "すべての記事を見る",
    hasBorder: true,
    color: "gray",
  },
};
export const RightIcon: Story = {
  args: {
    children: "Wantedly",
    rightIcon: <IconSeparateWindow />,
    hasBorder: true,
  },
};
export const LeftIcon: Story = {
  args: {
    children: "Wantedly",
    leftIcon: <IconSeparateWindow />,
    hasBorder: true,
  },
};
export const AsSpan: Story = {
  args: {
    children: "FLAT採用サイト",
    as: "span",
  },
};
export const AsSpanGrayBorder: Story = {
  args: {
    children: "すべての記事を見る",
    as: "span",
    hasBorder: true,
    color: "gray",
  },
};
export const AsSpanHasIcon: Story = {
  args: {
    children: "Wantedly",
    as: "span",
    rightIcon: <IconSeparateWindow />,
    hasBorder: true,
  },
};
