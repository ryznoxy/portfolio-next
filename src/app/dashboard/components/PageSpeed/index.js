"use client";
import SectionHeading from "../../../commons/components/elements/SectionHeading";
import SectionSubHeading from "../../../commons/components/elements/SectionSubHeading";
import React, { useState } from "react";
import useSWR from "swr";
import PathButton from "./components/pathButton";
import SpeedScore from "./components/SpeedScore";
import Link from "next/link";
import dynamic from "next/dynamic";
import LoadingSpeedInsight from "@/app/commons/components/elements/LoadingSpeedInsight";

const SpeedScores = dynamic(() => import("./components/SpeedScore"), {
  ssr: false,
  loading: () => <LoadingSpeedInsight />,
});

const PageSpeedInsights = () => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL_PAGESPEED;

  const category = ["PERFORMANCE", "ACCESSIBILITY", "BEST_PRACTICES", "SEO"];
  const categoryMap = category
    .map((category) => `&category=${category}`)
    .join("");

  const [active, setActive] = useState("/");
  const [url, setUrl] = useState(baseURL + active + categoryMap);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(url, fetcher, {
    revalidateOnMount: true,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const score = {
    performance: data?.lighthouseResult?.categories["performance"].score * 100,
    accessibility:
      data?.lighthouseResult?.categories["accessibility"].score * 100,
    bestPractices:
      data?.lighthouseResult?.categories["best-practices"].score * 100,
    seo: data?.lighthouseResult?.categories["seo"].score * 100,
  };

  const refetch = (path) => {
    setActive(path);
    mutate();
    setUrl(baseURL + path + categoryMap);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Page Speed Insights" />
        <SectionSubHeading>
          <p>My Page Speed Insights.</p>
          <Link href={"https://pagespeed.web.dev/"}>PageSpeed </Link>
        </SectionSubHeading>
      </div>
      <PathButton active={active} refetch={refetch} />
      <SpeedScores data={score} isLoading={isLoading} />
    </div>
  );
};

export default PageSpeedInsights;
