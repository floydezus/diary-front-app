import { Meta, StoryFn } from "@storybook/react";

import { Button } from "./Button";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";

export default {
  component: Button,
  title: "UIKit/Button",
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default button",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  icon: <Bars3BottomLeftIcon />,
};

export const CustomClasses = Template.bind({});
CustomClasses.args = {
  ...Default.args,
  classNames: "bg-indigo-600 p-2 hover:bg-indigo-200 text-yellow-100",
};
