import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import { Modal } from "./Modal";

global.ResizeObserver = require("resize-observer-polyfill");

describe("<Modal />", () => {
  afterAll(cleanup);
  it("Should render the component without crash", () => {
    render(
      <Modal isOpen={true} setClose={console.log}>
        I'm modal
      </Modal>
    );
  });

  it("Modal click calls the correct handler", () => {
    const handleOpen = jest.fn();
    render(
      <Modal isOpen={true} setClose={handleOpen} children={<h1>Header</h1>} />
    );
    const button = screen.getByTestId("close");
    fireEvent.click(button);
    expect(handleOpen).toHaveBeenCalledTimes(1);
  });

  it("Close button is display", () => {
    render(
      <Modal
        isOpen={true}
        setClose={console.log}
        hasCloseButton
        children={<h1>Header</h1>}
      />
    );
    const button = screen.getByTestId("close");
    expect(button).toBeInTheDocument();
  });
});
