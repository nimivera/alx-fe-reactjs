import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

describe("TodoList component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/Add todo/i);
    const addButton = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);
    expect(screen.getByText(/New Task/i)).toBeInTheDocument();
  });

  test("toggles a todo", () => {
    render(<TodoList />);
    const checkbox = screen.getByRole("checkbox", { name: /Learn React/i });
    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    // find the first delete button and click it
    const deleteButtons = screen.getAllByText(/Delete/i);
    fireEvent.click(deleteButtons[0]);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
