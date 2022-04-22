// Dependencies
import React, { useMemo, useState } from "react";
import { Column, useSortBy, useTable } from "react-table";

// Assets
import ArrowBottomIcon from "assets/icons/arrow-bottom-icon.svg";
import OptionsDotsIcon from "assets/icons/option-dots-icon.svg";

// Styles
import { Layout, OptionItem, OptionList, SortIcon, TableView, View } from "./styles";

// Components
import Row from "./components/Row";
import IconButton, { DropdownAlignment, IconButtonVariants } from "components/inputs/IconButton";
import CheckBox from "components/inputs/CheckBox";

const Table = ({ columns = [], data = [] }: { columns: Column<any>[]; data: Object[] }) => {
  const [hiddenColumns, setHiddenColumns] = useState([]);

  /**
   * @var withOptionsMenu
   * @description Memorize the columns of the table by adding the menu option.
   */
  const withOptionsColumns = useMemo(
    () => [
      ...columns,
      {
        Header: (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton
              variant={IconButtonVariants.GHOST}
              icon={OptionsDotsIcon}
              dropDownOptions={{
                alignment: DropdownAlignment.RIGHT,
              }}
              renderDropDown={
                <OptionList>
                  {columns.map((column: any, index) => (
                    <OptionItem key={`--options-container-${index.toString()}`}>
                      <CheckBox
                        value={hiddenColumns.find((e) => e === column.accessor) ?? true}
                        label={(column.Header ?? "").toString()}
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
                        disabled={
                          hiddenColumns.length >= columns.length / 2 &&
                          !hiddenColumns.find((e) => e === column.accessor)
                        }
                      />
                    </OptionItem>
                  ))}
                </OptionList>
              }
            />
          </div>
        ),
        accessor: "action",
        disableSortBy: true,
      },
    ],
    [columns],
  );

  const { getTableProps, getTableBodyProps, rows, headerGroups, toggleHideColumn, prepareRow } =
    useTable(
      {
        columns: withOptionsColumns,
        data,
      },
      useSortBy,
    );

  const firstPageRows = rows.slice(0, 20);

  return (
    <Layout>
      <View>
        <TableView {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup: any, index: number) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={`--table-head-${index.toString()}`}>
                {headerGroup.headers.map((column: any, index: number) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={`--table-head-row-${index.toString()}`}
                  >
                    {column.render("Header")}
                    {column.isSorted && (
                      <SortIcon isSortedDesc={column.isSortedDesc} src={ArrowBottomIcon} />
                    )}
                  </th>
                ))}
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
