import React from "react";
import axios from "axios";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ApiCall from "../components/ApiCall";
jest.mock("axios");
describe("Unit test the api call ", () => {
  // not RTL encourages more at the higher level
  // and not too much in isolation / unit testing
  test("rendering of the call component", async () => {
    const mockStories = [
      { objectID: 1, title: "Hello" },
      { objectID: 2, title: "React" },
      { objectID: 3, title: "React Testing Lib" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: mockStories } })
    );
    // need to set up the mock before the component render
    render(<ApiCall />);
    await userEvent.click(screen.getByText("Fetch Stories"));
    const items = await screen.findAllByRole("listitem");
    expect(items).toHaveLength(3);
  });
});
