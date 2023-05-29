import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import { Button } from "./Button";

describe("<Button />", () => {
  afterAll(cleanup);
  it("Should render the component without crash", () => {
    render(<Button>Test button</Button>);
  });

  it("Button click calls the correct handler", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("Button displays the correct text", () => {
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(buttonText);
  });
});
