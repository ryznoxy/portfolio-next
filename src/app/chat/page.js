import dynamic from "next/dynamic";
import ChatRoom from "./Chat";

const NoSSR = dynamic(() => import("./Chat"), { ssr: false });

export const metadata = {
  title: "Chat | Reza",
  description: "A short story about Reza",
};

export default function Chat() {
  return <NoSSR />;
}
