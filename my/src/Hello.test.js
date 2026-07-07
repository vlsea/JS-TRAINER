import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

test("рендерит приветствие по имени", () => {
  render(<Hello name="Владимир" />);

  const titleElement = screen.getByText("Привет, Владимир!");

  expect(titleElement).toBeInTheDocument();
});
