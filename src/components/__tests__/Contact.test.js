import { fireEvent, render, screen } from "@testing-library/react";
import { ContactUs } from "../ContactUs";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
test("Should load contact us component", () => {
  render(<ContactUs />); // display the component
  const heading = screen.getByRole("heading"); // from the screen (display screen) get all headings
  expect(heading).toBeInTheDocument();
});

/*we could just render <Header/> but as it internally uses, the redux store, we 
are wrapping it inside a Provider component and passing the appStore
as the <Header/> also uses the <Link> tags which come from react router, we need to wrap 
it inside <BrowserRouter/> */
it("Should render header component with a login buttion", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header></Header>
      </Provider>
    </BrowserRouter>
  );

  //const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", { name: "Login" });
  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getAllByText(/Cart/); // /Cart/ is like regex
  expect(cartItems[0]).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });
  expect(logoutButton).toBeInTheDocument();
});
