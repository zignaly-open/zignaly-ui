// Dependencies
import React, { useMemo } from "react";

// Types
import { LogoProps, iconsByType } from "./types";

function Logo({ type, width, height }: LogoProps) {
  const renderIcon = useMemo(() => {
    const Icon = iconsByType[type];
    return Icon ? <Icon width={width} height={height} /> : null;
  }, [type, width, height]);

  return renderIcon;
}

export default Logo;
