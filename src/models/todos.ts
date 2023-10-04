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
