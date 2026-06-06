import * as React from "react";
import { cn } from "@/lib/utils";

export const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "block font-sans uppercase tracking-luxe-md text-[0.65rem] text-onyx/70 mb-2",
      className,
    )}
    {...props}
  />
));
Label.displayName = "Label";
