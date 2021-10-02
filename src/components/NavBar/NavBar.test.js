import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../config/store";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar", () => {
  it("renders with expected elements", () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavBar />
      </Provider>
    );

    expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
    expect(getByText(/Cat-alog/i)).toBeInTheDocument();
  });

  it("redirects to the Home view when Home button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(getByText(/Home/i));
    expect(window.location.pathname).toEqual('/');
  });

  it("redirects to the About view when About button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(getByText(/About/i));
    expect(window.location.pathname).toEqual('/about');
  });

  it("redirects to the Bombay gallery view when Bombay button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(getByText(/Cat-alog/i));
    fireEvent.click(getByText(/Bombay/i));
    expect(window.location.pathname).toEqual('/gallery/bombay');
  });

  it("redirects to the Ocicat gallery view when Ocicat button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(getByText(/Cat-alog/i));
    fireEvent.click(getByText(/Ocicat/i));
    expect(window.location.pathname).toEqual('/gallery/ocicat');
  });

  it("redirects to the Toybob gallery view when Toybob button is clicked", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(getByText(/Cat-alog/i));
    fireEvent.click(getByText(/Toybob/i));
    expect(window.location.pathname).toEqual('/gallery/toybob');
  });
});
