// Dependencies
import React, {useCallback, useState} from "react";

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

const MenuDropDown = ({
  title,
  secondaryTitle = null,
  children
}: MenuDropDownProps) => {
  // Hooks
  const [isActiveDropDown, setActiveDropDown] = useState(false);

  /**
   * @function handleActiveDropDown():
   * @description Toggle Active DropDown functionality
   */
  const handleActiveDropDown = useCallback(() => {
    setActiveDropDown((active) => !active);
  }, []);

  return (
    <Layout>
      <Button
        center={!secondaryTitle}
        isActiveDropDown={isActiveDropDown}
        onClick={handleActiveDropDown}
      >
        <Field>
          {secondaryTitle && (
            <Typography variant={'h5'} color={'neutral300'}>{secondaryTitle}</Typography>
          )}
          <Typography variant={'h3'} color={'neutral300'}>{title}</Typography>
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
