"use client";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { ImReply } from "react-icons/im";
import Image from "next/image";

export default function ChatItems({
  id,
  name,
  message,
  image,
  email,
  created_at,
  sessionEmail,
  is_reply,
  reply_to,
  deleteMessage,
  clickReply,
  show,
}) {
  const [hover, setHover] = useState(false);
  const authorEmail = process.env.NEXT_PUBLIC_AUTHOR_EMAIL;
  const time = formatDistanceToNow(new Date(created_at), { addSuffix: true });

  return (
    <div className="flex items-start  space-x-3 w-full">
      <Image
        src={image}
        alt={name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex items-center gap-5 w-full">
          <div className="text-sm flex items-center space-x-1">
            <p>{name}</p>
            {authorEmail === email && (
              <div className="text-xs">
                <MdVerified className="text-blue-500 " size={20} />
              </div>
            )}
          </div>
          {authorEmail === sessionEmail && (
            <button onClick={() => deleteMessage(id)} aria-label="delete">
              <FaTrash size={16} className="text-red-500" />
            </button>
          )}
          {/* <span className="text-xs text-neutral-500 ">{time}</span> */}
        </div>
        <div
          className="flex items-end mr-6"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="flex w-fit max-w-lg overflow-x-auto">
            <p className=" bg-neutral-200 dark:bg-neutral-800  rounded-xl rounded-tl-sm px-3 py-2 text-sm">
              {is_reply && (
                <>
                  <span className="text-amber-600 whitespace-nowrap mr-1">
                    @{reply_to}
                  </span>
                  <span>{message}</span>
                </>
              )}
              {!is_reply && <>{message}</>}
            </p>
          </div>
          {hover && (
            <div className="flex gap-2">
              <motion.button
                initial={{ opacity: 0, rotate: -60 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => clickReply(id)}
                aria-label="reply"
                className="ml-1 text-neutral-600 dark:text-neutral-400"
              >
                <ImReply size={18} />
              </motion.button>
            </div>
          )}
        </div>
        <span className="text-xs text-neutral-500 ">{time}</span>
      </div>
    </div>
  );
}
