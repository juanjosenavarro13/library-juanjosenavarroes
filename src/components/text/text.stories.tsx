import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./text";

const meta = {
  component: Text,
  argTypes: {
    children: {
      name: "children",
      type: { name: "string", required: true },
      description: "The children of the text",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
      },
    },
    variant: {
      name: "variant",
      type: { name: "string", required: false },
      description: "The variant of the text",
      control: { type: "select" },
      options: ["bold", "underline", "none"],
      table: {
        type: { summary: "string" },
      },
    },
    type: {
      name: "type",
      type: { name: "string", required: false },
      description: "The type of the text",
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "p"],
      table: {
        type: { summary: "h1, h2, h3, h4, p" },
      },
    },
    className: {
      control: { type: "text" },
      type: "string",
      description: "The className of the text",
      table: {
        type: { summary: "string" },
      },
    },
    color: {
      control: { type: "select" },
      type: { name: "string", required: false },
      options: ["grey", "blue", "black"],
      description: "The color of the text",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
  },
};
