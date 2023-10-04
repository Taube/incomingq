import { ColumnDef } from "@tanstack/react-table";
import { ChannelIcon } from "@/features/todos/ChannelIcon";
import { formatDate } from "@/components/columns/format-date";
import { Checkbox } from "@/components/ui/checkbox";

export type Channel =
  | "Champ"
  | "Email"
  | "Google"
  | "GoogleMessages"
  | "InstagramDirect"
  | "Kik"
  | "LinkedIn"
  | "Messenger"
  | "Line"
  | "Signal"
  | "Slack"
  | "Sms"
  | "Snapchat"
  | "Teams"
  | "Telegram"
  | "Viber"
  | "WhatsApp"
  | "WeChat";

export type ToDo = {
  id: string;
  sender: string;
  subject: string;
  date: string;
  channel: Channel;
};

export const columns: ColumnDef<ToDo>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "channel",
    header: "Channel",
    cell: ({ row }) => <ChannelIcon channel={row.getValue("channel")} />,
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => <>{row.getValue("subject")}</>,
  },
  {
    accessorKey: "sender",
    header: () => "Sender",
    cell: ({ row }) => <>{row.getValue("sender")}</>,
  },
  {
    accessorKey: "date",
    header: () => "Date",
    cell: ({ row }) => <>{formatDate(row.getValue("date"))}</>,
  },
];
