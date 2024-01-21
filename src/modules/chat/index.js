"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { getDatabase, onValue, ref, remove, set } from "firebase/database";
import { auth, db } from "@/app/lib/firebase";
import { v4 as uuidv4 } from "uuid";

import { IoIosCloseCircle } from "react-icons/io";

import ChatItems from "./components/ChatItems";
import ChatInput from "./components/ChatInput";
import ChatSkeleton from "./components/ChatSkeleton";

const ChatRoom = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const [replyMessage, setReplyMessage] = useState({
    isReply: false,
    name: "",
  });

  const messagesRef = ref(db, "messages");

  const inputMessageRef = useRef(null);
  const chatListRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messagesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        messagesArray.sort((a, b) => {
          const aDate = new Date(a.createdAt);
          const bDate = new Date(b.createdAt);
          return aDate - bDate;
        });

        setMessages(messagesArray);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [messagesRef]);

  useEffect(() => {
    if (chatListRef.current && !hasScrolledUp) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [newMessage, messages, hasScrolledUp]);

  useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isScrolledToBottom =
          chatListRef.current.scrollHeight - chatListRef.current.clientHeight <=
          chatListRef.current.scrollTop - 1;

        if (isScrolledToBottom) {
          setHasScrolledUp(false);
        } else {
          setHasScrolledUp(true);
        }
      }
    };
    const currentChatListRef = chatListRef.current;
    currentChatListRef?.addEventListener("scroll", handleScroll);

    return () => {
      currentChatListRef?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSendMessage = () => {
    const messageId = uuidv4();
    const messageRef = ref(db, `messages/${messageId}`);

    if (!newMessage) return;

    set(messageRef, {
      id: messageId,
      text: newMessage,
      user: user.displayName,
      email: user.email,
      image: user.photoURL,
      createdAt: new Date().toISOString(),
      is_show: true,
      is_reply: replyMessage.isReply,
      reply_message: replyMessage.name,
    });

    setReplyMessage({ isReply: false, name: "" });
    setNewMessage("");
  };

  function handleDeleteMessage(id) {
    if (!user) {
      return;
    }
    const messageRef = ref(db, `messages/${id}`);
    remove(messageRef);
  }

  function handleReplyMessage(name) {
    if (!user) {
      return;
    }
    inputMessageRef.current.focus();
    setReplyMessage({
      isReply: true,
      name: name,
    });
  }

  return (
    <div className="w-full ">
      <div
        className="flex flex-col space-y-4 h-[50vh]  scroll-smooth overflow-y-scroll "
        ref={chatListRef}
      >
        {loading ? (
          <ChatSkeleton />
        ) : (
          messages.map((message) => (
            <ChatItems
              key={message.id}
              created_at={message.createdAt}
              name={message.user}
              message={message.text}
              email={message.email}
              image={message.image}
              sessionEmail={user?.email}
              is_reply={message.is_reply}
              reply_to={message.reply_message}
              clickReply={() => handleReplyMessage(message.user)}
              deleteMessage={() => handleDeleteMessage(message.id)}
              id={message.id}
              show={message.is_show}
            />
          ))
        )}
      </div>

      <div className="pt-4">
        <div>
          {replyMessage.isReply && (
            <motion.div
              initial={{ opacity: 0, y: +10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="bg-neutral-300 dark:bg-neutral-700 px-2 py-1 rounded-lg w-fit mb-2 flex gap-1 items-center text-xs"
              onClick={() => setReplyMessage({ isReply: false, name: "" })}
            >
              Reply to <h1>{replyMessage.name}</h1>
              <IoIosCloseCircle
                className="text-neutral-600 dark:text-neutral-400 cursor-pointer "
                size={20}
              />
            </motion.div>
          )}
        </div>
        {user && (
          <ChatInput
            handleSendMessage={handleSendMessage}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            inputMessageRef={inputMessageRef}
          />
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
