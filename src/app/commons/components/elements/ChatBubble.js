"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiChat } from "react-icons/bi";

export default function ChatBubble() {
  const pathname = usePathname();

  return (
    <div>
      {pathname !== "/chat" && (
        <Link
          href={"/chat"}
          aria-label="Chat"
          className="rounded-full p-4 fixed right-2 bottom-2 md:bottom-6 mr-3 mb-3 border dark:border-neutral-600 shadow-lg z-[99999] bg-white dark:bg-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:scale-[1.1] hover:rotate-6 transition-all duration-500 ease-in-out"
        >
          <BiChat size={24} />
        </Link>
      )}
    </div>
  );
}
