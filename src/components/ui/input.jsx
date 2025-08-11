import * as React from "react";
import clsx from "clsx";

const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      className={clsx(
        "w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
