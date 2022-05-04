import React from "react";
import { ToastContext } from "./ToastProvider";

export function useToast() {
  const toastHelpers = React.useContext(ToastContext);
  return toastHelpers;
}
