import { FC } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

type Props = {
  isSearch?: boolean;
  name: string;
  placeholder?: string;
  type?: "text" | "password" | "search" | "email";
  onChange: (v: any) => void;
  value: string;
  hasAutoFocus?: boolean;
  required?: boolean;
};

export const InputText: FC<Props> = ({
  name,
  isSearch = false,
  placeholder = "",
  type = "text",
  onChange,
  value,
  hasAutoFocus = false,
  required = false,
  ...props
}) => {
  const inputClasses = classNames(
    "block",
    "h-full",
    "w-full",
    "border",
    "bg-gray-100",
    "py-2",
    {
      "pl-8": isSearch,
    },
    {
      "pl-3": !isSearch,
    },
    "pr-3",
    "text-gray-900",
    "rounded",
    "placeholder-gray-500",
    "focus:border-transparent",
    "focus:placeholder-gray-400",
    "focus:outline-none",
    "focus:ring-0",
    "sm:text-sm"
  );

  return (
    <div className="flex flex-1 rounded-xl max-w-lg border-separate">
      <label htmlFor={name} className="sr-only">
        {name}
      </label>
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        {isSearch && (
          <div
            role="search-icon"
            className="pointer-events-none absolute inset-y-0 left-2 flex items-center"
          >
            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
          </div>
        )}
        <input
          className={inputClasses}
          placeholder={placeholder}
          type={type}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          value={value}
          required={required}
          autoFocus={hasAutoFocus}
          role="textbox"
          {...props}
        />
      </div>
    </div>
  );
};
