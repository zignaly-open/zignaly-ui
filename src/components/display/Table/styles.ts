// Dependencies
import styled from "styled-components";
import { styledIf } from "utils/styled";

export const Layout = styled.div``;

export const View = styled.div`
  width: 100%;
  border-radius: 16px;
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

export const TableView = styled.table`
  border-spacing: 0;
  overflow: hidden;
  width: 100%;

  font-family: "Avenir", sans-serif;
  background: #131225;

  thead {
    border: 1px solid #222249;
    background: #222249;

    th {
      color: #f3f4f6;
      padding: 4px 22px;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 0.55px;
    }
  }

  tbody {
    td {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: center;
      color: #f3f4f6;
      padding: 12px 22px;
      white-space: nowrap;

      &.action {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }

  th,
  td {
    margin: 0;
    border: 0;
    border-bottom: 1px solid #222249;

    :last-child {
      border-right: 0;
    }
  }

  thead {
    user-select: none;

    th {
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
      white-space: nowrap;
    }
  }

  tr {
    :last-child {
      td {
        border-bottom: 0;
      }
    }
  }
`;

export const SortIcon = styled.img<{ isSortedDesc?: boolean }>`
  margin-left: 6px;
  transition: all 0.1s linear;

  ${(props) => `
     ${styledIf(
       props.isSortedDesc,
       `
      transform: rotate(180deg);
    `,
       `
      transform: rotate(0deg);
    `,
     )}
  `}
`;

export const OptionList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 8px 0 0;
  overflow: auto;
  position: relative;
  height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
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

export const OptionItem = styled.li`
  padding: 12px 18px;
`;
