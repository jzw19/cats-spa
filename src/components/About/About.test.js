import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../config/store";
import About from "./About";

describe("About", () => {
  it("renders with expected elements", () => {
    const { getByText } = render(
      <Provider store={store}>
        <About />
      </Provider>
    );

    expect(getByText(/This is a single page application for uploading and viewing pictures of cats./i)).toBeInTheDocument();
    expect(getByText(/You can upload your own pictures and add them to the gallery./i)).toBeInTheDocument();
  });
});
