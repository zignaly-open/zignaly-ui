// Dependencies
import React, {useCallback, useRef, useState} from "react";

// Styles
import {
  Layout,
  Field,
  Button,
  ArrowIcon,
  DropDown
} from "./styles";

// Assets
import ArrowBottomIcon from "assets/icons/arrow-bottom-icon.svg";

// Components
import Typography from "components/display/Typography";

// Utils
import { MenuDropDownProps } from "./types";
import {useClickAway} from "react-use";

const MenuDropDown = ({
  title,
  focused = false,
  secondaryTitle = null,
  children
}: MenuDropDownProps) => {
  // Refs
  const menuRef = useRef(null);

  // Hooks
  const [isActiveDropDown, setActiveDropDown] = useState(false);

  /**
   * @function handleActiveDropDown():
   * @description Toggle Active DropDown functionality
   */
  const handleActiveDropDown = useCallback(() => {
    setActiveDropDown((active) => !active);
  }, []);

  useClickAway(menuRef, () => {
    setActiveDropDown(false);
  });

  return (
    <Layout ref={menuRef}>
      <Button
        focused={focused}
        center={!secondaryTitle}
        isActiveDropDown={isActiveDropDown}
        onClick={handleActiveDropDown}
      >
        <Field>
          {secondaryTitle && (
            <Typography variant={'h5'}>{secondaryTitle}</Typography>
          )}
          <Typography variant={'h3'}>{title}</Typography>
        </Field>
        <ArrowIcon>
          <ArrowBottomIcon />
        </ArrowIcon>
      </Button>
      {isActiveDropDown && (
        <DropDown>
          {children}
        </DropDown>
      )}
    </Layout>
  );
};

export default MenuDropDown;
