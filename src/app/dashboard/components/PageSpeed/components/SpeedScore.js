import LoadingSpeedInsight from "@/app/commons/components/elements/LoadingSpeedInsight";
import React from "react";
import { CircularProgress } from "@nextui-org/react";

export default function SpeedScore({ data, isLoading }) {
  const dataValue = Object.values(data);
  const dataName = ["Performance", "Accessibility", "Best Practices", "SEO"];

  if (isLoading) return <LoadingSpeedInsight />;

  return (
    <div className="my-8 flex items-end justify-center space-x-5 text-[10px] text-neutral-600 dark:text-neutral-300 md:space-x-8 md:text-sm">
      {dataValue.map((item, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center  gap-1 "
        >
          <p className="text-center text-xs md:text-sm">{dataName[i]}</p>
          <div className="">
            <CircularProgress
              value={Number(item || 0)}
              color="success"
              showValueLabel={true}
              strokeWidth={10}
              size="lg"
              aria-label="progress-circle"
              classNames={{
                svg: "w-16 h-16 md:w-20 md:h-20",
                value: "text-1xl font-semibold ",
              }}
              className="shadow-md rounded-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
