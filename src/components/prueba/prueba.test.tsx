import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Prueba } from "./prueba";

describe("Prueba", () => {
  it("render hola123", () => {
    render(<Prueba hola="hola123" />);
    expect(screen.getByText("hola123")).toBeInTheDocument();
  });
  it("render default value", () => {
    render(<Prueba />);
    expect(screen.getByText("hola")).toBeInTheDocument();
  });
});
