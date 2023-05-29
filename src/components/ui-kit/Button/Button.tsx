import React, { ReactNode } from "react";
import classNamesFunc from "classnames";

const rootClasses: string[] = [
  "inline-flex",
  "items-center",
  "rounded-md",
  "border",
  "font-medium",
  "shadow-sm",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-offset-2",
  "p-2",
  "gap-1",
];

type Props = {
  icon?: ReactNode;
  disabled?: boolean;
  classNames?: string;
  children?: ReactNode;
  onClick?: (e: any) => void;
  type?: "submit" | "button";
};

export const Button: React.FC<Props> = ({
  disabled = false,
  classNames,
  icon,
  children,
  type = "button",
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={classNamesFunc(rootClasses, classNames)}
      {...props}
    >
      {children}
      {icon && (
        <span className="h-6 w-6" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};
