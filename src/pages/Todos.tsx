import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "@/features/todos/Columns";
import { DataTable } from "@/features/todos/DataTable";
import { useGetTodoListQuery } from "@/features/todos/todoSlice";

const Todos = () => {
  const { data = [] } = useGetTodoListQuery();

  return (
    <Tabs defaultValue="todo">
      <TabsList className="grid p-0 grid-flow-col justify-stretch h-12 shadow-lg shadow-slate-700/25">
        <TabsTrigger value="todo" className="h-12">
          <span className="px-4">Todo</span>
          <Badge variant="default">{data.length}</Badge>
        </TabsTrigger>
        <TabsTrigger value="done" className="h-12">
          <span className="px-4">Done</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="todo">
        <DataTable columns={columns} data={data} />
      </TabsContent>
      <TabsContent value="done">Done</TabsContent>
    </Tabs>
  );
};

export default Todos;
