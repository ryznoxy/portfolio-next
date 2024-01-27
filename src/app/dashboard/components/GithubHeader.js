"use client";

import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import { BiLogoGithub } from "react-icons/bi";
import React, { useState } from "react";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "@nextui-org/react";

import { useTheme } from "next-themes";
import useHasMounted from "@/app/commons/components/hooks/useHasMounted";
// import { GITHUB_ACCOUNTS } from "@/app/commons/constants/github";

function GithubHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Github" icon={<BiLogoGithub size={24} />} />
        <SectionSubHeading>
          <p>My Github Contributions</p>
          <Link href="https://github.com/ryznoxy" target="_blank">
            @ryznoxy
          </Link>
        </SectionSubHeading>
      </div>
      <div className="p-2 bg-neutral-50 dark:bg-neutral-900 rounded flex justify-center items-center overflow-hidden mx-auto xl:w-[822px] md:w-[480px] lg:w-[750px] ">
        <GitHubCalendar
          username="ryznoxy"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockMargin={4}
          blockSize={14}
          fontSize={12}
          renderBlock={(block, activity) => (
            <Tooltip
              content={`${activity.count} activities on ${activity.date}`}
              key={block}
              closeDelay={50}
              offset={10}
              className="text-xs rounded-sm px-2"
            >
              {block}
            </Tooltip>
          )}
          blockRadius={3}
        />
      </div>
    </div>
  );
}

export default GithubHeader;
