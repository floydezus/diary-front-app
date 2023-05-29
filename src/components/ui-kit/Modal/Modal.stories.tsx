import { Meta, StoryFn } from "@storybook/react";

import { Modal } from "./Modal";
import { Fragment, useState } from "react";

export default {
  component: Modal,
  title: "UIKit/Modal",
  decorators: [
    (storyFn) => (
      <div className={"relative h-screen scale-90"}>{storyFn()}</div>
    ),
  ],
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <h1>I'm modal</h1>,
  isOpen: false,
  hasCloseButton: false,
  setClose: () => console.log("Test"),
};

export const WithCloseButton = Template.bind({});
WithCloseButton.args = {
  ...Default.args,
  hasCloseButton: true,
};

export const Usage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Fragment>
      <button
        className="border p-2"
        onClick={() => {
          handleOpen();
        }}
      >
        Open modal
      </button>
      <Modal setClose={handleClose} isOpen={isOpen}>
        Modal demo
      </Modal>
    </Fragment>
  );
};
