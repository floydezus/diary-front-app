import { render, cleanup, screen } from "@testing-library/react";

import { InputText } from "./InputText";

describe("<InputText />", () => {
  afterAll(cleanup);
  it("Should render the component without crash", () => {
    render(
      <InputText
        name={"test"}
        onChange={(v) => console.log("value =", v)}
        value={"value"}
      />
    );
  });
  it("Input value is set correctly'", () => {
    const value = "initial value";
    render(
      <InputText
        name={"test_1"}
        onChange={(v) => console.log("value =", v)}
        value={value}
      />
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;
    expect(input.value).toBe(value);
  });
  it("Should shows search icon", () => {
    render(
      <InputText
        name={"test_2"}
        onChange={(v) => console.log("value =", v)}
        value={""}
        isSearch
        type="search"
      />
    );
    expect(screen.getByRole("search-icon")).toBeInTheDocument();
  });
});
