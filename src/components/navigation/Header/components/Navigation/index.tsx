// Dependencies
import React, { useMemo } from "react";

// Types
import {} from "./types";

// Components
import IconButton from "components/inputs/IconButton";

// Assets
import ThreeDotsIcon from "assets/icons/horizontal-three-dots-icon.svg?url";

function Menu() {
  /**
   * @name renderMenuDropDown()
   * @description Memorize the container of navigation menu
   */
  const renderMenuDropDown = useMemo(() => <div>Hola</div>, []);

  return (
    <IconButton
      variant={"secondary"}
      icon={ThreeDotsIcon}
      renderDropDown={renderMenuDropDown}
      dropDownOptions={{
        position: "static",
      }}
    />
  );
}

export default Menu;
