import { useTheme } from "next-sanity/studio";
import React from "react";

export default function CareerSkeleton() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-4">
      {[...Array(2)].map((_, index) => (
        <div
          key={index}
          className="rounded-xl transition-all duration-300 shadow-sm flex items-center gap-8 py-4 pr-6 border border-l-0 border-neutral-300 dark:border-neutral-600 "
        >
          <div
            className={` rounded-r-xl border border-l-0 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark `}
          >
            <div className="justify-center items-center flex p-3 relative z-[1]">
              <div className="bg-neutral-300 dark:bg-neutral-700 animate-pulse w-20 h-20 rounded-md "></div>
            </div>
          </div>

          <div className="space-y-1">
            <div className="w-32 h-3 bg-neutral-300 dark:bg-neutral-700 animate-pulse rounded-full"></div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
              <div className="flex items-center gap-1 md:gap-2">
                <div className="w-20 h-3 bg-neutral-300 dark:bg-neutral-700 animate-pulse  rounded-full"></div>

                <div className="w-20 h-3 bg-neutral-300 dark:bg-neutral-700 animate-pulse  rounded-full"></div>
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex gap-1">
                  <div className="w-10 h-3 bg-neutral-300 dark:bg-neutral-700 animate-pulse  rounded-full"></div>
                  <div className="w-14 h-3 bg-neutral-300 dark:bg-neutral-700 animate-pulse  rounded-full"></div>
                </div>
                <div className="w-12 h-3 bg-neutral-300 dark:bg-neutral-700 animate-pulse  rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
