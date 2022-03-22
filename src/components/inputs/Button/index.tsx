// Dependencies
import * as React from "react";
import { ReactElement, useMemo } from "react";

// Styled Components
import * as styled from "./styles";

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  GHOST = "ghost",
}

export enum ButtonSizes {
  SMALL = "small",
  NORMAL = "normal",
  LARGE = "large",
}

type ButtonProps = {
  variant?: ButtonVariants;
  size?: ButtonSizes;
  caption?: string | null;
  icon?: ReactElement<any> | String | null;
  leftElement?: ReactElement<any> | String | null;
  rightElement?: ReactElement<any> | String | null;
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Button({
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.NORMAL,
  caption = "Button",
  icon = null,
  leftElement = null,
  rightElement = null,
  disabled = false,
  onClick = () => {},
}: ButtonProps): ReactElement {
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

  /**
   * @var renderCaptionOrIcon
   * @description If there is an icon property, check whether it is a react element or an image text.
   * Otherwise, it displays whatever is in the 'caption' field.
   * @type {JSX.Element}
   */
  const renderCaptionOrIcon = useMemo(
    () => (
      <styled.Caption>
        {icon ? (
          typeof icon === "function" ? (
            icon
          ) : (
            <styled.CenterIcon src={icon} alt={null} />
          )
        ) : (
          caption
        )}
      </styled.Caption>
    ),
    [icon, caption],
  );

  return (
    <styled.Layout
      onlyIcon={!!icon}
      withElements={!!leftElement || !!rightElement}
      disabled={disabled}
      variant={variant}
      size={size}
      onClick={onClick}
    >
      <styled.Container>
        {leftElement && <styled.LeftElement>{renderLeftElement}</styled.LeftElement>}
        {(caption || icon) && renderCaptionOrIcon}
        {rightElement && <styled.RightElement>{renderRightElement}</styled.RightElement>}
      </styled.Container>
    </styled.Layout>
  );
}

export default Button;