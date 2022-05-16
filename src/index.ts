// Display
import Avatar from "./components/display/Avatar";
import ErrorMessage from "./components/display/ErrorMessage";
import Loader from "./components/display/Loader";
import Table from "./components/display/Table";
import ConnectionStateLabel from "./components/display/Table/components/ConnectionStateLabel";
import DateLabel from "./components/display/Table/components/DateLabel";
import PercentageIndicator from "./components/display/Table/components/PercentageIndicator";
import PriceLabel from "./components/display/Table/components/PriceLabel";
import Typography from "./components/display/Typography";
import ZigWalletIndicator from "./components/display/ZigWalletIndicator";
import CoinLabel from "./components/display/Table/components/CoinLabel";
import SliderProgress from "./components/display/Slider";

// Inputs
import Button from "./components/inputs/Button";
import CheckBox from "./components/inputs/CheckBox";
import IconButton from "./components/inputs/IconButton";
import InputAmount from "./components/inputs/InputAmount";
import TextButton from "./components/inputs/TextButton";
import InputText from "./components/inputs/InputText";
import Select from "./components/inputs/Selector";
import InputCode from "./components/inputs/InputCode";
import { ButtonGroup } from "./components/styled";

// Layouts
import {MarginContainer, PageContainer} from "./components/styled";

// Icons
import CloseIcon from "./assets/icons/close-icon.svg";
import CopyIcon from "./assets/icons/copy-icon.svg";
import OpenArrowIcon from "./assets/icons/open-arrow-icon.svg";
import EyeOpenIcon from "./assets/icons/eye-open-icon.svg";
import EyeClosedIcon from "./assets/icons/eye-closed-icon.svg";
import OptionDotsIcon from "./assets/icons/option-dots-icon.svg";
import ArrowBottomIcon from "./assets/icons/arrow-bottom-icon.svg";
import UserIcon from "./assets/icons/user-icon.svg";
import CheckIcon from "./assets/icons/check-icon.svg";
import LogoDiscordIcon from "./assets/icons/discord-logo-icon.svg";
import LogoLinkedInIcon from "./assets/icons/linkedin-logo-icon.svg";
import LogoTwitterIcon from "./assets/icons/twitter-logo-icon.svg";
import LogoMediumIcon from "./assets/icons/medium-logo-icon.svg";
import LogoTelegramIcon from "./assets/icons/telegram-logo-icon.svg";
import WalletIcon from "./assets/icons/wallet-icon.svg";
import OptionHorizontalDotsIcon from "./assets/icons/horizontal-three-dots-icon.svg";
import EditPenIcon from "./assets/icons/edit-pen-icon.svg";
import SwapIcon from "./assets/icons/swap-icon.svg";
import SwapVertIcon from "./assets/icons/swap-vert-icon.svg";

import AvatarImage0 from './assets/images/avatars/avatar-0.svg';
import AvatarImage1 from './assets/images/avatars/avatar-1.svg';
import AvatarImage2 from './assets/images/avatars/avatar-2.svg';
import AvatarImage3 from './assets/images/avatars/avatar-3.svg';
import AvatarImage4 from './assets/images/avatars/avatar-4.svg';
import AvatarImage5 from './assets/images/avatars/avatar-5.svg';
import AvatarImage6 from './assets/images/avatars/avatar-6.svg';

// Navigation
import Header from "./components/navigation/Header";
import MenuDropDown from './components/navigation/MenuDropDown';
import ZigsBalance from "./components/navigation/Header/components/ZigsBalance";
import BrandImage from "./components/navigation/Header/components/BrandImage";

// Utils
import ThemeProvider from "./utils/ThemeProvider";
import { dark, light } from "./theme";

export {
  /**
   * =-=-=-=-=-=-=-=
   *   Components
   * =-=-=-=-=-=-=-=
   */
  // Display
  Avatar,
  Loader,
  Table,
  ConnectionStateLabel,
  DateLabel,
  PriceLabel,
  PercentageIndicator,
  Typography,
  ErrorMessage,
  ZigWalletIndicator,
  CoinLabel,
  SliderProgress,
  // Inputs
  Button,
  CheckBox,
  IconButton,
  InputAmount,
  TextButton,
  InputText,
  Select,
  ButtonGroup,
  InputCode,
  // Navigation
  Header,
  BrandImage,
  ZigsBalance,
  MenuDropDown,
  PageContainer,
  MarginContainer,
  /**
   * =-=-=-=-=-=-=-=
   *   Assets
   * =-=-=-=-=-=-=-=
   */
  CloseIcon,
  CopyIcon,
  OpenArrowIcon,
  EyeOpenIcon,
  EyeClosedIcon,
  OptionDotsIcon,
  ArrowBottomIcon,
  UserIcon,
  CheckIcon,
  LogoDiscordIcon,
  LogoLinkedInIcon,
  LogoMediumIcon,
  LogoTelegramIcon,
  LogoTwitterIcon,
  WalletIcon,
  OptionHorizontalDotsIcon,
  EditPenIcon,
  SwapIcon,
  SwapVertIcon,
  AvatarImage0,
  AvatarImage1,
  AvatarImage2,
  AvatarImage3,
  AvatarImage4,
  AvatarImage5,
  AvatarImage6,
  /**
   * =-=-=-=-=-=-=-=
   *     Utils
   * =-=-=-=-=-=-=-=
   */
  ThemeProvider,
  dark,
  light,
};
