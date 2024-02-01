import React from "react";

import { navLists } from "@/app/commons/constants/navLists";
import { ScrollShadow } from "@nextui-org/react";

export default function PathButton({ refetch, active }) {
  return (
    <ScrollShadow
      hideScrollBar
      orientation="horizontal"
      className="flex gap-4 w-full overflow-scroll "
    >
      {navLists.map((item, i) => (
        <button
          key={i}
          onClick={() => refetch(item.link)}
          disabled={active === item.link}
          className={`px-3 py-1 rounded-xl text-sm  cursor-pointer capitalize disabled:cursor-not-allowed ${
            active === item.link
              ? "bg-neutral-800 dark:bg-neutral-300 dark:text-black text-white"
              : "bg-neutral-500 dark:bg-neutral-600 text-white"
          }`}
        >
          {item.name}
        </button>
      ))}
    </ScrollShadow>
  );
}
