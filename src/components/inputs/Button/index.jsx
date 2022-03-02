// Dependencies
import React, { useMemo } from "react";

// Styled Components
import * as styled from "./styles";

// Types
import { buttonVariantsId } from "@types/buttons";
import { sizeTypesId } from "@types/sizes";

function Button({
  variant = buttonVariantsId.PRIMARY,
  size = sizeTypesId.SMALL,
  leftElement = null,
  caption = "Button",
  rightElement = null,
  disabled = false,
}) {
  /**
   * @function renderLeftElement
   * @description Render an element on the left side, if a JSX render a component, otherwise an image.
   * @type {JSX.Element}
   */
  const renderLeftElement = useMemo(
    () =>
      typeof leftElement === "function" ? (
        leftElement
      ) : (
        <styled.Icon src={leftElement} alt={caption} />
      ),
    [leftElement],
  );

  /**
   * @function renderRightElement
   * @description Render an element on the right side, if a JSX render a component, otherwise an image.
   * @type {JSX.Element}
   */
  const renderRightElement = useMemo(
    () =>
      typeof rightElement === "function" ? (
        rightElement
      ) : (
        <styled.Icon src={rightElement} alt={caption} />
      ),
    [rightElement],
  );

  return (
    <styled.Layout disabled={disabled} variant={variant} size={size}>
      {leftElement && renderLeftElement}
      {caption && <styled.Caption>{caption}</styled.Caption>}
      {rightElement && renderRightElement}
    </styled.Layout>
  );
}

export default Button;
