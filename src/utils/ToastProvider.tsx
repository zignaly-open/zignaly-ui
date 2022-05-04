import { ToastList } from "components/display/Toaster";
import { ToasterProps } from "components/display/Toaster/types";
import React from "react";
import { useCallback, useState } from "react";

export const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

let id = 0;

type ToastContextType = {
  addToast: ({ toast }: { toast: ToasterProps }) => void;
  removeToast: (id: number) => void;
};

export const ToastProvider = ({ children }: any) => {
  const [toasts, setToasts] = useState<ToasterProps[]>([]);

  const addToast = useCallback(
    ({ toast }: { toast: ToasterProps }) => {
      setToasts((toasts) => [
        ...toasts,
        { id: id++, variant: toast.variant, size: toast.size, caption: toast.caption },
      ]);
    },
    [setToasts],
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts],
  );
  return (
    <ToastContext.Provider value={toasts ? { addToast, removeToast } : undefined}>
      <ToastList toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
