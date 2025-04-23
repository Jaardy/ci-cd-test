import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../src/App.jsx";

test("clicking the button increments the count", async () => {
  render(<App />);

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("count is 0");

  await userEvent.click(button);
  expect(button).toHaveTextContent("count is 1");
});

// deliberately failing test
test("true is false", () => {
  expect(true).toBe(false);
});
