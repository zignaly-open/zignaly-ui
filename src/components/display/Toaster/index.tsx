// Dependencies
import React from "react";
import { ToasterProps } from "./types";
import * as styled from "./styles";
import Typography from "../Typography";
import SuccessIcon from "assets/icons/check-icon.svg";
import ErrorAlertIcon from "assets/icons/error-alert-icon.svg";
import { dark } from "theme";

const Toaster = ({ variant = "error", size = "large", caption = "" }: ToasterProps) => {
  return (
    <styled.ToastContainer variant={variant} size={size}>
      {variant === "error" ? (
        <styled.IconContainer>
          <ErrorAlertIcon color={dark["redGraphOrError"]} />
        </styled.IconContainer>
      ) : (
        <styled.IconContainer>
          <SuccessIcon color={dark["greenGraph"]} />
        </styled.IconContainer>
      )}
      {size === "large" ? (
        <styled.Caption>
          <Typography variant="body1" weight="regular">
            {caption}
          </Typography>
        </styled.Caption>
      ) : (
        <styled.Caption>
          <Typography variant="body2" weight="regular">
            {caption}
          </Typography>
        </styled.Caption>
      )}
    </styled.ToastContainer>
  );
};

export function ToastList({ toasts }: { toasts: ToasterProps[] }) {
  return (
    <styled.Wrapper>
      {toasts.map((toast: ToasterProps) => (
        <Toaster
          key={toast.id} 
          id={toast.id} 
          variant={toast.variant}
          size={toast.size}
          caption={toast.caption}
        ></Toaster>
      ))}
    </styled.Wrapper>
  );
}

export default Toaster;
