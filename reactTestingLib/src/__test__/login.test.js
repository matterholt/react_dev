import React from "react";

import { render, screen } from "@testing-library/react";
import Login from "../components/Login";

describe("user completion for user login", () => {
  test("render Login component", () => {
    render(<Login />);
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
  });
});
