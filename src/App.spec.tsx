import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("should be able to render App", () => {
    const { getByText } = render(<App />);

    expect(getByText("Vitest")).toBeInTheDocument();
  });
});
