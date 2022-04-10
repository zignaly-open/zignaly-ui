// Display
import Avatar from "./components/display/Avatar";
import ThemeProvider from "./utils/ThemeProvider";
import Typography from "./components/display/Typography";
import Table from "./components/display/Table";
import ConnectionStateLabel from "./components/display/Table/components/ConnectionStateLabel";
import DateLabel from "./components/display/Table/components/DateLabel";
import PercentageIndicator from "./components/display/Table/components/PercentageIndicator";
import PriceLabel from "./components/display/Table/components/PriceLabel";
import Loader from "./components/display/Loader";
import ZigWalletIndicator from "./components/display/ZigWalletIndicator";

// Navigation
import Tabs from "./components/navigation/Tabs";
import Tab from "./components/navigation/Tabs/components/Tab";
import TabPanel from "./components/navigation/Tabs/components/TabPanel";

// Inputs
import Button from "./components/inputs/Button";
import TableButton from "./components/display/Table/components/TableButton";
import IconButton from "./components/inputs/IconButton";
import Select from "./components/inputs/Selector";
import { ButtonGroup } from "./components/styled";
// import { buttonVariantsId } from "./types/buttons";

// Icons
import CloseIcon from "./assets/icons/close-icon.svg";
import OptionsDotsIcon from "./assets/icons/option-dots-icon.svg";
import CheckIcon from "assets/icons/check-icon.svg";

// Themes
import { dark, light } from "./types/theme";

export {
  /**
   * =-=-=-=-=-=-=-=
   *   Components
   * =-=-=-=-=-=-=-=
   */

  // Display
  Avatar,
  Typography,
  Table,
  ConnectionStateLabel,
  DateLabel,
  PriceLabel,
  PercentageIndicator,
  ZigWalletIndicator,
  Loader,
  // Inputs
  Button,
  ButtonGroup,
  IconButton,
  TableButton,
  Select,
  // Navigation
  Tabs,
  Tab,
  TabPanel,
  // Theme
  dark,
  light,
  ThemeProvider,
  // Icons
  OptionsDotsIcon,
  CloseIcon,
  CheckIcon,
};
