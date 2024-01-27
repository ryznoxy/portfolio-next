import LoadingSpeedInsight from "@/app/commons/components/elements/LoadingSpeedInsight";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function SpeedScore({ data, isLoading }) {
  const dataValue = Object.values(data);
  const dataName = ["Performance", "Accessibility", "Best Practices", "SEO"];

  if (isLoading) return <LoadingSpeedInsight />;

  return (
    <div className="my-6 flex items-end justify-center space-x-6 text-[10px] text-neutral-600 dark:text-neutral-300 md:space-x-10 md:text-sm">
      {dataValue.map((item, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center  gap-1"
        >
          <p className="text-center text-xs md:text-sm">{dataName[i]}</p>
          <div className="w-13 h-13 md:w-20 md:h-20 ">
            <CircularProgressbar
              value={Number(item) * 100}
              text={item}
              styles={buildStyles({
                textColor: "#008800",
                pathColor: "#00cc66",
              })}
              className="shadow-md rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
