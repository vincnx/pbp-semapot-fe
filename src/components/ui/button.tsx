import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive ",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_3px_0_0] active:shadow-[0_0px_0_0] active:translate-y-[4px]",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border-2 bg-background shadow-xs dark:bg-input/30 dark:border-input dark:hover:bg-input/50 hover:bg-accent/20",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-4 py-1 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  isLoading,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      {isLoading ? (
        <Comp
          data-slot="button"
          className={cn(
            buttonVariants({ variant, size, className }),
            "cursor-not-allowed opacity-70",
          )}
          {...props}
          disabled
        >
          <span className="flex h-6 items-center gap-1">
            <span className="invisible">p</span>
            <span className="size-1.5 animate-[scale_1s_ease-in-out_infinite] rounded-full bg-current" />
            <span className="size-1.5 animate-[scale_1s_ease-in-out_0.2s_infinite] rounded-full bg-current" />
            <span className="size-1.5 animate-[scale_1s_ease-in-out_0.4s_infinite] rounded-full bg-current" />
            <span className="invisible">p</span>
          </span>
        </Comp>
      ) : (
        <Comp
          data-slot="button"
          className={cn(buttonVariants({ variant, size, className }))}
          {...props}
        />
      )}
    </>
  );
}

export { Button, buttonVariants };
