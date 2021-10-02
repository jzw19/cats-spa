import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../config/store";
import Home from "./Home";

describe("Home", () => {
  it("renders with expected elements", () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(
      getByAltText(/black cat sitting in a fabric tunnel/i)
    ).toBeInTheDocument();
    expect(getByText(/Bubbles/i)).toBeInTheDocument();
    expect(getByText(/The alpha cat/i)).toBeInTheDocument();
  });
});
