import { ToDo } from "@/models/todos";

export const getSelectedIdList = (
  rowSelection: Record<string, boolean>,
  data: Array<ToDo>
) => {
  return Object.keys(rowSelection)
    .map((indexStr) => {
      const index = parseInt(indexStr, 10);
      if (!Number.isNaN(index) && index >= 0 && index < data.length) {
        return data[index].id;
      }
      return "";
    })
    .filter(Boolean);
};
