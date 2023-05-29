import { Meta, StoryFn } from "@storybook/react";

import { InputText } from "./InputText";
import { useState } from "react";

export default {
  component: InputText,
  title: "UIKit/InputText",
} as Meta<typeof InputText>;

export const Usage: StoryFn<typeof InputText> = (...args) => {
  const [text, setText] = useState("");
  return (
    <InputText
      onChange={setText}
      value={text}
      name={"test name"}
      placeholder="Placeholder"
      hasAutoFocus
      {...args}
    />
  );
};

export const SearchBar: StoryFn<typeof InputText> = (...args) => {
  const [text, setText] = useState("");
  return (
    <InputText
      onChange={setText}
      value={text}
      name={"test name"}
      placeholder="Search..."
      type="search"
      isSearch
      {...args}
    />
  );
};
