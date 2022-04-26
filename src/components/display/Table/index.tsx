// Dependencies
import React, { useRef, useState } from "react";
import { useSortBy, useTable } from "react-table";

// Assets
import ArrowBottomWhiteIcon from "assets/icons/arrow-bottom-icon-white.svg";
import OptionsDotsIcon from "assets/icons/option-dots-icon.svg";

// Styles
import { Layout, OptionItem, OptionList, SortIcon, TableView, View, ThView } from "./styles";

// Components
import Row from "./components/Row";
import IconButton, { DropdownAlignment, IconButtonVariants } from "components/inputs/IconButton";
import CheckBox from "components/inputs/CheckBox";

const Table = ({ columns = [], data = [] }: { columns: any[]; data: Object[] }) => {
  const tableRef = useRef(null);
  const [hiddenColumns, setHiddenColumns] = useState([]);

  const { getTableProps, getTableBodyProps, rows, headerGroups, toggleHideColumn, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

  const firstPageRows = rows.slice(0, 20);

  return (
    <Layout>
      <View ref={tableRef}>
        <TableView {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any, index: number) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={`--table-head-${index.toString()}`}>
                {headerGroup.headers.map((column: any, index: number) => (
                  <ThView
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={`--table-head-row-${index.toString()}`}
                    isSorted={column.isSorted}
                    isAlignRight={column.isAlignThRight}
                  >
                    {column.render("Header")}
                    {index < headerGroup.headers.length - 1 && (
                      <SortIcon
                        isSorted={column.isSorted}
                        isSortedDesc={column.isSortedDesc}
                        src={ArrowBottomWhiteIcon}
                      />
                    )}
                  </ThView>
                ))}
                <th role={"row"}>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <IconButton
                      variant={IconButtonVariants.GHOST}
                      icon={OptionsDotsIcon}
                      dropDownOptions={{
                        componentOverflowRef: tableRef,
                        alignment: DropdownAlignment.RIGHT,
                      }}
                      renderDropDown={
                        <OptionList>
                          {columns.map((column: any, index) => {
                            const isDisabled =
                              hiddenColumns.length >= columns.length - 2 &&
                              !hiddenColumns.find((e) => e === column.accessor);

                            const isActive =
                              hiddenColumns.find((e) => e === column.accessor) ?? true;

                            return (
                              <OptionItem key={`--options-container-${index.toString()}`}>
                                <CheckBox
                                  value={isActive}
                                  label={column.Header ?? ""}
                                  onChange={(isActive: boolean) => {
                                    toggleHideColumn(column.accessor, !isActive);
                                    if (!isActive) {
                                      // @ts-ignore
                                      setHiddenColumns((prevState: any[]) => {
                                        return [...prevState, column.accessor];
                                      });
                                    } else {
                                      setHiddenColumns((prevState) =>
                                        prevState.filter((e) => e !== column.accessor),
                                      );
                                    }
                                  }}
                                  disabled={isDisabled}
                                />
                              </OptionItem>
                            );
                          })}
                        </OptionList>
                      }
                    />
                  </div>
                </th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row: any, index: number) => {
              prepareRow(row);
              return (
                <Row key={`--firstPageRows-${index.toString()}`} row={row} {...row.getRowProps()} />
              );
            })}
          </tbody>
        </TableView>
      </View>
    </Layout>
  );
};

export default Table;
