import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

interface AlertProps {
  title?: string;
  description?: string;
  onConfirm: () => void;
  children: React.ReactNode;
}

const Alert = ({ onConfirm, title, description, children }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild onClick={() => setIsOpen(true)}>
        {children}
      </AlertDialogTrigger>
      {isOpen && (
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {title || "Are you absolutely sure?"}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {description ||
                "This action cannot be undone. Please confirm your action"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      )}
    </AlertDialog>
  );
};

export default Alert;
