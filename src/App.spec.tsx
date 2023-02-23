import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

// Query não falha caso não encontre o elemento
// Get falha caso não encontre o elemento, não espera
// Find falha caso não encontre o elemento, porém, espera o elemento aparecer em tela

describe("App", () => {
  it("should render list items", () => {
    const { getByText } = render(<App />);

    expect(getByText("Vini")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { findByText, getByTestId, debug, getByText } = render(<App />);

    const addButton = getByText("Adicionar");
    const input = getByTestId("input");

    fireEvent.change(input, {
      target: {
        value: "Novo",
      },
    });

    fireEvent.click(addButton);

    expect(await findByText("Novo")).toBeInTheDocument();
  });

  it("should be able to add new item to the list", async () => {
    const { getByTestId, getByText } = render(<App />);

    const addButton = getByText("Adicionar");
    const input = getByTestId("input");

    fireEvent.change(input, {
      target: {
        value: "Novo",
      },
    });

    fireEvent.click(addButton);

    await waitFor(() => {
      expect(getByText("Novo")).toBeInTheDocument();
    });
  });

  it("should be able to remove a item from the list", async () => {
    const { queryByText, getAllByText } = render(<App />);

    const removeButtons = getAllByText("Remover");

    fireEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText("Vini")).not.toBeInTheDocument();
    });
  });
});
