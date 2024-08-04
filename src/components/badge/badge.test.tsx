import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("badge", () => {
  it("should render with text", () => {
    render(<Badge>texttest</Badge>);
    expect(document.querySelector("div")).toHaveTextContent("texttest");
  });
  it("should render with JSX.ELEMENT", () => {
    render(
      <Badge>
        <p>texttest</p>
      </Badge>,
    );
    expect(document.querySelector("div")).toHaveTextContent("texttest");
  });
});
