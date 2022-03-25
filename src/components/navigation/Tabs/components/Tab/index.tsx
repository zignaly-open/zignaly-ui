import React from "react";
import { Tab as TabMui, TabProps } from "@mui/material";

const Tab = (props: TabProps) => {
  const { children, ...otherProps } = props;
  return <TabMui {...otherProps} data-text={children} />;
};
export default Tab;
