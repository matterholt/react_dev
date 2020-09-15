import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("render App", () => {
  test("App", () => {
    render(<App />);
    screen.getByText("Search:");
    expect(screen.getByText("Search:")).toBeInTheDocument();
    expect(screen.getByText(/Search:/)).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
  });
  describe("app", () => {
    test("render app component", async () => {
      render(<App />);
      //every time you are asserting that an element isn't there, use queryBy
      expect(screen.queryByText(/Sign in as/)).toBeNull();
      screen.debug();
      //findBy search variant is used for asynchronous elements which will be there eventually
      expect(await screen.findByText(/Sign in as/)).toBeInTheDocument();
      screen.debug();
    });
  });
});

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
