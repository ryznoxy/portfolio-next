"use client";
import SectionHeading from "../../../commons/components/elements/SectionHeading";
import SectionSubHeading from "../../../commons/components/elements/SectionSubHeading";
import React, { useState } from "react";
import useSWR from "swr";
import PathButton from "./components/pathButton";
import SpeedScore from "./components/SpeedScore";
import Link from "next/link";

const PageSpeedInsights = () => {
  const domainTarget = process.env.NEXT_PUBLIC_DOMAIN;
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL_PAGESPEED + domainTarget;

  const category = ["PERFORMANCE", "ACCESSIBILITY", "BEST_PRACTICES", "SEO"];
  const categoryMap = category
    .map((category) => `&category=${category}`)
    .join("");

  const [active, setActive] = useState("/");
  const [url, setUrl] = useState(baseURL + active + categoryMap);

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

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
    setUrl(baseURL + path + categoryMap);
    mutate();
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
      <SpeedScore data={score} isLoading={isLoading} />
    </div>
  );
};

export default PageSpeedInsights;
