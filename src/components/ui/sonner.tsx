import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { useTheme } from "next-themes";
import {
  Toaster as Sonner,
  toast as sonnerToast,
  type ToasterProps,
} from "sonner";
import { Button } from "./button";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

function toast(props: ToastProps) {
  return sonnerToast.custom(() => <Toast {...props} />);
}

interface ToastProps {
  title: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
  button?: {
    label: string;
    fn: () => void;
  };
}

const toastVariants = cva(
  "flex w-full items-center gap-2 rounded-lg border-2  p-4 shadow-sm md:max-w-[364px]",
  {
    variants: {
      variant: {
        default: "bg-white",
        destructive: "bg-destructive text-accent-foreground",
        success: "bg-green-600 text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Toast({ title, description, variant, button }: ToastProps) {
  return (
    <div className={cn(toastVariants({ variant }))}>
      <div className="flex flex-1 items-center">
        <div className="w-full">
          <p className="text-primary font-bold">{title}</p>
          <p className="mt-1">{description}</p>
        </div>
      </div>
      {button && (
        <Button
          onClick={button.fn}
          className="bg-accent-foreground hover:bg-accent-foreground/80 border-2"
        >
          click me
        </Button>
      )}
    </div>
  );
}

export { toast, Toaster };
