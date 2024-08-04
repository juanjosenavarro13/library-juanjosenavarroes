import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./badge";

const meta = {
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};
