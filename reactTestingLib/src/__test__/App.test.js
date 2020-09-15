import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("render app component", async () => {
  render(<App />);
  //every time you are asserting that an element isn't there, use queryBy
  expect(screen.queryByText(/Sign in as/)).toBeNull();
  //findBy search variant is used for asynchronous elements which will be there eventually
  expect(await screen.findByText(/Sign in as/)).toBeInTheDocument();
});

// test("app fireEvent", async () => {
//   //use userEvent over fireEvent
//   render(<App />);
//   await screen.findByText(/Sign in as/);
//   expect(screen.queryByText("Searches for JavaScript")).toBeNull();
//   // screen.debug();
//   // fireEvent.change(screen.getByRole("textbox"), {
//   //   target: { value: "JavaScript" },
//   // });

//   await userEvent.type(screen.getByRole("textbox"), "JavaScript");
//   //userEvent is closer to the user interactions, and has multiple way to capture event
//   expect(screen.getByText("Searches for JavaScript")).toBeInTheDocument();
//   // screen.debug();
// });

// function Search({ value, onChange, children }) {
//   return (
//     <div>
//       <label htmlFor="search">{children}</label>
//       <input id="search" type="text" value={value} onChange={onChange} />
//     </div>
//   );
// }
// describe("testing search in isolation", () => {
//   test("calls the onchange callback handler", () => {
//     const onChange = jest.fn();

//     render(
//       <Search value="" onChange={onChange}>
//         Search:
//       </Search>
//     );
//   });
// });
