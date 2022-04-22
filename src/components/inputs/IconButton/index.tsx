// Dependencies
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useClickAway } from "react-use";

// Styled Components
import { Layout, ViewPort, Icon, Dropdown, Container, DropdownElement } from "./styles";

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
  const element = useRef(document.createElement("div"));
  const layoutRef = useRef(null);

  // Hooks
  const [isActiveDropdown, setDropdownActive] = useState(false);

  /**
   * @function handleClickButton:
   * @description Function in charge of indicating the logic when pressing the button.
   */
  const handleClickButton = useCallback(() => {
    const newActiveState = !isActiveDropdown;
    const root = window.document.getElementById("root");

    if (root) {
      if (newActiveState) {
        const dropdown = document.createElement("div");
        dropdown.setAttribute("id", "dropdown-layout");
        root.appendChild(dropdown);

        console.log({ layoutRef });

        if (layoutRef && layoutRef.current) {
          const { offsetTop, clientHeight, offsetLeft } = layoutRef.current;
          console.log({ offsetTop, clientHeight, offsetLeft });
          ReactDOM.render(
            <Dropdown
              top={offsetTop + clientHeight}
              left={offsetLeft}
              width={dropDownOptions.width}
              alignment={dropDownOptions.alignment}
            >
              {renderDropDown}
            </Dropdown>,
            dropdown,
          );
        }
      }
    }
    setDropdownActive(newActiveState);
  }, [isActiveDropdown, dropDownOptions, onClick]);

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
    </Layout>
  );
};

export { IconButtonVariants, IconButtonSizes, DropdownAlignment };
export default IconButton;
