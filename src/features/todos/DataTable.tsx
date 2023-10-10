import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getSelectedIdList } from "@/helpers/getSelectedIdList";
import { ToDo } from "@/models/todos";
import {
  useUpdateTodoToDoneMutation,
  useUpdateTodoToNotDoneMutation,
} from "./todoSlice";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isDone?: boolean;
}

export const DataTable = <TData, TValue>({
  columns,
  data,
  isDone,
}: DataTableProps<TData, TValue>) => {
  const [updateTodoToDone] = useUpdateTodoToDoneMutation();
  const [updateTodoToNotDone] = useUpdateTodoToNotDoneMutation();

  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  const rowText =
    table.getFilteredSelectedRowModel().rows.length === 1 ? "item" : "items";

  const handleBatch = () => {
    const selectedIdList = getSelectedIdList(rowSelection, data as Array<ToDo>);

    if (isDone) {
      selectedIdList.map((id) => updateTodoToNotDone(id));
    } else {
      selectedIdList.map((id) => updateTodoToDone(id));
    }

    setRowSelection({});
  };

  return (
    <>
      <div className="bg-gray-950 p-4 sticky top-20 z-50 h-20 flex flex-row justify-between items-center">
        <span>
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} {rowText} selected.
        </span>
        <Button
          onClick={handleBatch}
          variant="primary"
          disabled={Object.keys(rowSelection).length === 0}
        >
          {isDone ? "Set as Todo" : "Set as Done"}
        </Button>
      </div>
      <Table className="relative">
        <TableHeader className="sticky top-40 z-50 bg-gray-900 shadow-lg shadow-slate-700/25">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="h-16">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="z-0">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell, index) => (
                  <TableCell
                    key={cell.id}
                    className={index === 0 ? "w-[32px] pr-0" : ""}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
