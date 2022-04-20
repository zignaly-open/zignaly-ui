// Dependencies
import React, { useCallback, useRef, useState } from "react";
import { useClickAway } from "react-use";

// Styled Components
import { Layout, ViewPort, Icon, Dropdown, Container } from "./styles";

// Types
import { DropdownAlignment, IconButtonProps, IconButtonSizes, IconButtonVariants } from "./types";

const IconButton = ({
  icon,
  disabled = false,
  size = IconButtonSizes.NORMAL,
  variant = IconButtonVariants.PRIMARY,
  onClick = null,
  dropDownOptions = {
    width: "auto",
    alignment: DropdownAlignment.LEFT,
  },
  renderDropDown = null,
}: IconButtonProps) => {
  // Ref
  const layoutRef = useRef(null);

  // Hooks
  const [isActiveDropdown, setDropdownActive] = useState(false);

  /**
   * @function handleClickButton:
   * @description Function in charge of indicating the logic when pressing the button.
   */
  const handleClickButton = useCallback(() => {
    setDropdownActive((current) => !current);
  }, [onClick]);

  useClickAway(layoutRef, () => {
    setDropdownActive(false);
  });

  return (
    <Layout ref={layoutRef}>
      <ViewPort
        size={size}
        variant={variant}
        disabled={disabled}
        isActiveDropdown={isActiveDropdown}
      >
        <Container onClick={disabled ? null : renderDropDown ? handleClickButton : onClick}>
          <Icon src={icon} />
        </Container>
      </ViewPort>
      {renderDropDown && isActiveDropdown && (
        <Dropdown {...dropDownOptions}>{renderDropDown}</Dropdown>
      )}
    </Layout>
  );
};

export { IconButtonVariants, IconButtonSizes };
export default IconButton;
