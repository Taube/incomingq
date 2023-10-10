import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { columns } from "@/features/todos/Columns";
import { DataTable } from "@/features/todos/DataTable";
import { useGetTodoListQuery } from "@/features/todos/todoSlice";

const Todos = () => {
  const { data: dataTodo = [] } = useGetTodoListQuery(false);
  const { data: dataDone = [] } = useGetTodoListQuery(true);

  return (
    <Tabs defaultValue="todo">
      <TabsList className="grid p-0 grid-flow-col justify-stretch h-12 shadow-lg shadow-slate-700/25">
        <TabsTrigger value="todo" className="h-12">
          <span className="px-4">Todo</span>
          <Badge variant="default">{dataTodo.length}</Badge>
        </TabsTrigger>
        <TabsTrigger value="done" className="h-12">
          <span className="px-4">Done</span>
          <Badge variant="default">{dataDone.length}</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="todo">
        <DataTable columns={columns} data={dataTodo} />
      </TabsContent>
      <TabsContent value="done">
        <DataTable columns={columns} data={dataDone} isDone />
      </TabsContent>
    </Tabs>
  );
};

export default Todos;
