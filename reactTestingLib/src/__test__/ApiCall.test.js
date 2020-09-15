import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ApiCall from "../components/ApiCall";

jest.mock("axios");
describe("Unit test the api call ", () => {
  // not RTL encourages more at the higher level
  // and not too much in isolation / unit testing
  test("rendering of the call component", async () => {
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];
    const promise = Promise.resolve({ data: { hits: stories } });
    axios.get.mockImplementationOnce(() => promise);

    render(<ApiCall />);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    await act(() => promise);
  });
});
