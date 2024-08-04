import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Text } from "./text";
describe("Text", () => {
  it("should render the h1 text", () => {
    render(<Text type="h1">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("H1");
  });

  it("should render the h2 text", () => {
    render(<Text type="h2">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("H2");
  });

  it("should render the h3 text", () => {
    render(<Text type="h3">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("H3");
  });

  it("should render the h4 text", () => {
    render(<Text type="h4">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("H4");
  });

  it("should render the p text", () => {
    render(<Text type="p">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("P");
  });

  it("should render the bold text", () => {
    render(<Text variant="bold">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("P");
    expect(screen.getByText("Hello World").classList).toContain("font-bold");
  });

  it("should render the underline text", () => {
    render(<Text variant="underline">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("P");
    expect(screen.getByText("Hello World").classList).toContain("underline");
  });

  it("should render the className text", () => {
    render(<Text className="text-red-500">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World").tagName).toBe("P");
    expect(screen.getByText("Hello World").classList).toContain("text-red-500");
  });

  it("should render with color grey text", () => {
    render(<Text color="grey">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toHaveClass(
      "text-gray-600 dark:text-gray-300",
    );
  });

  it("should render with color blue text", () => {
    render(<Text color="blue">Hello World</Text>);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Hello World")).toHaveClass("text-blue-400");
  });
});
