/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Champ } from "@/assets/icons/champ.svg";
import { ReactComponent as Email } from "@/assets/icons/email.svg";
import { ReactComponent as GoogleMessages } from "@/assets/icons/google-messages.svg";
import { ReactComponent as Google } from "@/assets/icons/google.svg";
import { ReactComponent as InstagramDirect } from "@/assets/icons/instagram-direct.svg";
import { ReactComponent as Kik } from "@/assets/icons/kik.svg";
import { ReactComponent as Line } from "@/assets/icons/line.svg";
import { ReactComponent as LinkedIn } from "@/assets/icons/linkedin.svg";
import { ReactComponent as Messenger } from "@/assets/icons/messenger.svg";
import { ReactComponent as Signal } from "@/assets/icons/signal.svg";
import { ReactComponent as Slack } from "@/assets/icons/slack.svg";
import { ReactComponent as Sms } from "@/assets/icons/sms.svg";
import { ReactComponent as Snapchat } from "@/assets/icons/snapchat.svg";
import { ReactComponent as Teams } from "@/assets/icons/teams.svg";
import { ReactComponent as Telegram } from "@/assets/icons/telegram.svg";
import { ReactComponent as Viber } from "@/assets/icons/viber.svg";
import { ReactComponent as WeChat } from "@/assets/icons/wechat.svg";
import { ReactComponent as WhatsApp } from "@/assets/icons/whatsapp.svg";
import { Channel } from "@/models/todos";

type ChannelIconProps = {
  channel: Channel;
};

const channelIcons: Record<Channel, React.FC> = {
  Champ,
  Email,
  GoogleMessages,
  Google,
  InstagramDirect,
  LinkedIn,
  Kik,
  Line,
  Messenger,
  Signal,
  Slack,
  Sms,
  Snapchat,
  Teams,
  Telegram,
  Viber,
  WeChat,
  WhatsApp,
};

export const ChannelIcon = ({ channel }: ChannelIconProps) => {
  const IconComponent = channelIcons[channel];

  if (IconComponent) {
    return <IconComponent />;
  }

  // eslint-disable-next-line no-console
  console.error(new Error("Whoops, you did not pass a correct channel"));

  return null;
};
