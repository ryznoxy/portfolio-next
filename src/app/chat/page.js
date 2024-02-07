import dynamic from "next/dynamic";
import ChatRoom from "./components/Chat";

const NoSSR = dynamic(() => import("./components/Chat"), { ssr: false });

export const metadata = {
  title: "Chat ",
  description: "A short story about Reza",
};

export default function Chat() {
  return <NoSSR />;
}
