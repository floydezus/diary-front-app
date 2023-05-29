import { render, cleanup, screen } from "@testing-library/react";

import { Container } from "./Container";

describe("<Container />", () => {
  afterAll(cleanup);
  it("Should render the component without crash", () => {
    render(<Container children={undefined} />);
  });
  it("Should shows container with div inside", () => {
    render(<Container children={<div>Test container</div>} />);
    expect(screen.getByTestId("container")).toBeInTheDocument();
  });
});
