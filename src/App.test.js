import { render, screen, fireEvent } from "@testing-library/react";
import {Login} from "./App";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

test("renders Login page", () => {
  render(<Login />);
    // screen.debug();
  var email = screen.getByPlaceholderText("Enter email");
  fireEvent.change(email,{target: {value: "anvesh@ggmail.in"}});

    var password = screen.getByPlaceholderText("Enter password");
    fireEvent.change(password, {target: {value:"16p71a0307@Anvesh"}});

    var button = screen.getByRole("button");
    fireEvent.click(button);// jest
});
// test("mock navigate to next page", () => {
//   render(<Login />);

//   var email = screen.getByPlaceholderText("Enter email");
//   fireEvent.change(email, { target: { value: "anveshreddy@gmail.in" } });

//   var password = screen.getByPlaceholderText("Enter password");
//   fireEvent.change(password, { target: { value: "16p71a0307@A" } });

//   var button = screen.getByRole("button");
//   fireEvent.click(button);

//   // expect(mockedUsedNavigate,).toHaveBeenCallWith("/product")
// });
