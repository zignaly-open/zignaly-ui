import Typography from "components/display/Typography";
import React from "react";
import { useTable } from "react-table";
import { TableProps } from "../types";
import { Layout, TableView, ThView, View } from "./styles";

export const UserDashboardTable = ({ columns = [], data = [] }: TableProps) => {
  // Hooks
  const { getTableProps, getTableBodyProps, rows, headerGroups,  prepareRow } =
    useTable({
      columns,
      data,
    });

  const firstPageRows = rows.slice(0, 20);

  return (
    <Layout>
      <View>
        <TableView>
          <thead>
            {headerGroups.map((headerGroup: any, index: number) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={`--table-head-${index.toString()}`}>
                {headerGroup.headers.map((column: any, index: number) => (
                  <ThView
                    {...column.getHeaderProps()}
                    key={`--table-head-row-${index.toString()}`}
                    isSorted={column.isSorted}
                    isAlignRight={column.isAlignThRight}
                  >
                    {
                      <Typography color={"avatarBack"} variant={"h5"} weight={"regular"}>
                        {column.render("Header")}
                      </Typography>
                    }
                  </ThView>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map((row: any, index: number) => {
              prepareRow(row);
              return (
                <tr key={`--firstPageRows-${index.toString()}`} {...row.getRowProps()}>
                  {row.cells.map((cell: any, index: number) => (
                    <td
                      className={cell.column.id === "action" ? "action" : "row-td"}
                      {...cell.getCellProps()}
                      key={`--table-row-cell-${index.toString()}`}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </TableView>
      </View>
    </Layout>
  );
};
