import styled from "styled-components";

export const Layout = styled.div``;

export const View = styled.div`
  width: 100%;
  border-radius: 15px 15px 5px 5px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 2px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    border: 2px solid transparent;
    background-clip: content-box;
    background: #131225;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2f2f66;

    &:hover {
      background: #363670;
    }
  }
`;

export const ThView = styled.th<{ isSorted?: boolean; isAlignRight?: boolean }>`
  color: #222249;
  padding: 4px 22px;
  white-space: nowrap;
  background: transparent;
  margin: 0;
  img {
    vertical-align: initial;
  }
  &:first-child {
    border-radius: 0 0 0 5px;
  }
  &:last-child {
    border-radius: 0 0 5px 0;
  }
`;

export const TableView = styled.table`
  border-spacing: 0;
  overflow: hidden;
  width: 100%;

  font-family: "Avenir", sans-serif;

  thead {
    user-select: none;
    background: #06061a;
    box-shadow: 0 0 10px #16192b;
    border-radius: 0 0 5px 5px;
    position: relative;
    z-index: 0;
  }

  tbody {
    td {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0;
      text-align: center;
      color: #f3f4f6;
      padding: 12px 22px;
      white-space: nowrap;
      background: transparent;

      &.action {
        text-align: right;
      }
    }
  }

  td {
    margin: 0;
    border: 0;
    border-bottom: 1px solid #252339;
    background: transparent;
    img {
      vertical-align: initial;
    }
    :last-child {
      border-right: 0;
    }
  }

  tr {
    background: transparent;
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
`;
