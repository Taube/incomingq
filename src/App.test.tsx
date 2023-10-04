import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { App } from "./App";

describe("App", () => {
  it("Renders Hello world on the Home page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Hello world");
  });

  it("Renders Not Found if the route does not exist", () => {
    const nonExistentRoute = "/some/nonsense/route";
    render(
      <MemoryRouter initialEntries={[nonExistentRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Not found");
  });
});
