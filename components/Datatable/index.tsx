import useTranslation from "next-translate/useTranslation";
import React, { useMemo } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import { toast } from "react-toastify";

const CustomDataTable = ({
  columns,
  data,
  stillHistory,
  paginateFunction,
}: any) => {
  const dataColumns = useMemo(() => columns, [columns]);
  const tableData = useMemo(() => data, [data]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    //@ts-ignore
    setGlobalFilter,
  } = useTable(
    {
      columns: dataColumns,
      data: tableData,
    },
    useGlobalFilter,
    useSortBy
  );
  const { t } = useTranslation("common");

  const { globalFilter }: any = state;

  const renderTooltip = (content: React.ReactNode) => (
    <Tooltip overlay={content} placement="top" mouseEnterDelay={0.2}>
      <span>{content}</span>
    </Tooltip>
  );

  const handleCellClick = (value: string) => {
    navigator.clipboard.writeText(value);
    toast.success("Copied!", {
      position: "bottom-center",
      draggable: true,
    });
  };

  return (
    <div>
      <div id="assetBalances_wrapper" className="dataTables_wrapper no-footer">
        {/* ... */}
      </div>
      <table {...getTableProps()} className="table table-striped">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    borderBottom: "1px solid var(--border-color)",
                    background: "var(--background-color)",
                    padding: "8px",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  {renderTooltip(column.render("Header"))}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-caret-down" />
                      ) : (
                        <i className="fa fa-caret-up" />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      borderBottom: "1px solid var(--border-color)",
                      padding: "8px",
                      textAlign: "start",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: "30px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleCellClick(cell.value)}
                  >
                    {renderTooltip(cell.render("Cell"))}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination-wrapper" id="assetBalances_paginate">
        {/* ... */}
      </div>
    </div>
  );
};

export default CustomDataTable;
