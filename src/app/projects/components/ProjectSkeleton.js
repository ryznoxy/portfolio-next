import React from "react";

export default function ProjectSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          <div className="rounded-xl transition-all duration-300 shadow-sm lg:hover:shadow-md relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] h-full cursor-pointer ">
            <div className="flex flex-col">
              <div className="h-48 w-full bg-neutral-300 dark:bg-neutral-700 animate-pulse rounded-t-xl"></div>
              <div className="px-5 py-6 space-y-3 ">
                <div className="text-xl  h-4 w-32 bg-neutral-300 dark:bg-neutral-700 animate-pulse rounded-full"></div>
                <div className="line-clamp-2 text-sm h-4 w-52 bg-neutral-300 dark:bg-neutral-700 animate-pulse rounded-full"></div>
                <div className="flex gap-2 pt-2">
                  {[...Array(3)].map((_, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 bg-neutral-300 dark:bg-neutral-700 animate-pulse rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
