import React from "react";
import { IoIosSend } from "react-icons/io";

export default function ChatInput({
  newMessage,
  setNewMessage,
  handleSendMessage,
  inputMessageRef,
}) {
  return (
    <div className="flex gap-2 items-end justify-center">
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message here..."
        rows={1}
        className="outline-2 border border-neutral-600 w-full rounded-lg p-2 resize-none"
        ref={inputMessageRef}
      />
      <button
        disabled={newMessage.length < 1}
        onClick={handleSendMessage}
        aria-label="Send message"
        className="border border-neutral-600 p-2 bg-dark disabled:bg-neutral-700 text-white  rounded-lg flex justify-center items-center disabled:cursor-not-allowed"
      >
        <IoIosSend size={24} />
      </button>
    </div>
  );
}
