// Dependencies
import { LoaderTypes } from "components/display/Loader";
import * as React from "react";
import { ReactElement, useMemo } from "react";

// Styled Components
import * as styled from "./styles";

// Types
import { ButtonProps } from "./types";

function Button({
  variant = "primary",
  size = "medium",
  caption = "Button",
  color = "grey",
  leftElement = null,
  rightElement = null,
  disabled = false,
  onClick = () => {},
  loading,
  type,
}: ButtonProps): ReactElement {
  /**
   * @function renderLeftElement
   * @description Render an element on the left side, if a JSX render a component, otherwise an image.
   * @type {JSX.Element}
   */
  const renderLeftElement = useMemo(
    () =>
      typeof leftElement === "object" ? (
        leftElement
      ) : null,
    [leftElement],
  );

  /**
   * @function renderRightElement
   * @description Render an element on the right side, if a JSX render a component, otherwise an image.
   * @type {JSX.Element}
   */
  const renderRightElement = useMemo(
    () =>
      typeof rightElement === "object" ? (
        rightElement
      ) : null,
    [rightElement],
  );

  return (
    <styled.Layout
      withElements={!!leftElement || !!rightElement}
      disabled={disabled || loading}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      type={type}
    >
      <styled.Container>
        {!loading && leftElement && <styled.LeftElement>{renderLeftElement}</styled.LeftElement>}
        {!loading && caption}
        {loading && <styled.ButtonLoader type={LoaderTypes.TAILSPIN} color="black" ariaLabel=""></styled.ButtonLoader>}
        {!loading && rightElement && <styled.RightElement>{renderRightElement}</styled.RightElement>}
      </styled.Container>
    </styled.Layout>
  );
}

export default Button;

