import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../config/store";
import Gallery from "./Gallery";

describe("Gallery", () => {
  beforeAll(() => {
    delete window.location;
    window.location = {
      pathname: '/'
    };
    global.URL.createObjectURL = jest.fn(() => 'mockURL');
  });

  it("renders with error message when breed is an unexpected value", () => {
    window.location.pathname = '/gallery/invalid';
    const { getByText } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    expect(getByText(/Error: Invalid URL. Please select a valid cat breed./i)).toBeInTheDocument();
  });

  it("renders with default photo of bombay cat when routed to the /bombay endpoint", () => {
    window.location.pathname = '/gallery/bombay';
    const { getByAltText } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    expect(getByAltText(/Bombay/i)).toBeInTheDocument();
  });

  it("renders with default photo of ocicat when routed to the /ocicat endpoint", () => {
    window.location.pathname = '/gallery/ocicat';
    const { getByAltText } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    expect(getByAltText(/Ocicat/i)).toBeInTheDocument();
  });

  it("renders with default photo of toybob when routed to the /toybob endpoint", () => {
    window.location.pathname = '/gallery/toybob';
    const { getByAltText } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );

    expect(getByAltText(/Toybob/i)).toBeInTheDocument();
  });

  it("displays file names of selected files", () => {
    window.location.pathname = '/gallery/bombay';
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );
    const mockImageFile = new File(['mockImage'], 'mockImage.png', {type: 'image/png'});
    const photosFileInput = getByTestId('selectImageInput');

    fireEvent.click(getByText(/Select Photos/i));
    userEvent.upload(photosFileInput, mockImageFile);

    expect(getByText(/mockImage.png/i)).toBeInTheDocument();
  });

  it("displays images of uploaded files", () => {
    window.location.pathname = '/gallery/bombay';
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <Gallery />
      </Provider>
    );
    const mockImageFile = new File(['mockImage'], 'mockImage.png', {type: 'image/png', alt: 'mock bombay'});
    const photosFileInput = getByTestId('selectImageInput');
    const uploadButton = getByText('Upload');

    userEvent.upload(photosFileInput, mockImageFile);
    fireEvent.click(uploadButton);

    expect(getByText(/mockImage.png/i)).toBeInTheDocument();
  });
});
