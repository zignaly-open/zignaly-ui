// Dependencies
import React from "react";

// Styled Components
import { Layout, Icon } from "./styles";

// Types
import { ErrorMessageProps } from "./types";

// Assets
import ErrorAlertIcon from "assets/icons/error-alert-icon.svg";
import Typography from "../Typography";
import { dark } from "theme";
// TODO(Vetle): Refactor usage of Dark theme when light theme is ready
function ErrorMessage({ text, color }: ErrorMessageProps) {
  return (
    <Layout>
      <Icon>
        <ErrorAlertIcon height="18px" width="18px" color={dark[color]} />
      </Icon>
      <Typography variant={"body2"} color={color} weight="regular">
        {text}
      </Typography>
    </Layout>
  );
}

export default ErrorMessage;
