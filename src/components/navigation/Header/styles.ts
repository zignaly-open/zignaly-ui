// Dependencies
import styled from "styled-components";

// Config
import {headerConfig} from "./utils";

// Components
import ImageWithBasePath from "components/common/ImageWithBasePath";

export const Layout = styled.header`
  background: linear-gradient(269.14deg, #080810 0%, #11122B 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 34px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 12;
  height: ${headerConfig.height};
`;

export const Side = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 42px;
`;

export const Logo = styled(ImageWithBasePath)``;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 28px;
  user-select: none;

  a {
    color: #706F82;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: 0.55px;
    text-decoration: none;

    &.active {
      color: #7682F7;
    }
  }
`;

export const Icon = styled(ImageWithBasePath)``;
