"use client";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { BsBuildings as CompanyIcon } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import useHasMounted from "@/app/commons/components/hooks/useHasMounted";
import { urlFor } from "@/app/lib/sanityImageUrl";

export default function CareerCard({
  position,
  company,
  logo,
  location,
  start_date,
  end_date,
  link,
}) {
  const { resolvedTheme } = useTheme();
  const mounted = useHasMounted();
  const startDate = new Date(start_date);
  const endDate = end_date ? new Date(end_date) : new Date();

  const durationYears = differenceInYears(endDate, startDate);
  const durationMonths = differenceInMonths(endDate, startDate) % 12;

  let durationText = "";
  if (durationYears > 0) {
    durationText += `${durationYears} Year${durationYears > 1 ? "s" : ""} `;
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? "s" : ""}`;
  }

  const imageUrl = (source) => {
    if (source) {
      return urlFor(source).url();
    }
  };

  const dontHaveLogoURL =
    "https://res.cloudinary.com/dxgsqxdi3/image/upload/f_auto,q_auto/ukhe5phqaai5gq6nmtie";

  if (!mounted) return null;

  return (
    <div className=" rounded-xl transition-all duration-300 shadow-sm flex items-center gap-8 py-4 pr-6 border border-l-0 border-neutral-300 dark:border-neutral-600 ">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, height: "0px" }}
          animate={{ opacity: 1, y: 0, height: "90px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`${
            resolvedTheme === "light"
              ? " inverted-border-radius-carrer "
              : " inverted-border-radius-carrer-dark "
          }  rounded-r-xl border border-l-0 border-neutral-300 dark:border-neutral-600 bg-white dark:bg-dark`}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="justify-center items-center flex p-3 relative z-[1]"
          >
            {logo ? (
              <Image
                src={imageUrl(logo)}
                width={150}
                height={150}
                alt={company}
                className=" transition-all duration-300 ease-in-out  w-20"
              />
            ) : (
              <Image
                src={dontHaveLogoURL}
                width={150}
                height={150}
                alt={company}
                className=" transition-all duration-300 ease-in-out dark:invert  bg-blend-lighten scale-[1.7]"
              />
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="space-y-1">
        <h1>{position}</h1>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
          <div className="flex items-center gap-1 md:gap-2">
            <Link href={`${link}`} target="_blank">
              <span className="underline cursor-pointer hover:text-dark hover:dark:text-white">
                {company}
              </span>
            </Link>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{location}</span>
          </div>
          <div className="flex flex-col md:text-[13px]">
            <div className="flex gap-1">
              <span>{format(startDate, "MMM yyyy")}</span> -{" "}
              <span>{end_date ? format(endDate, "MMM yyyy") : "Present"}</span>
            </div>
            <span className="text-neutral-500 dark:text-neutral-500">
              ~ {durationText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
