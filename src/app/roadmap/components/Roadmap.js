"use client";
import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import useIsMobile from "@/app/commons/components/hooks/useIsMobile";
import React from "react";
import CourseList from "./CourseList";
import { Suspense } from "react";

function RoadmapPage() {
  const isMobile = useIsMobile();
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Roadmap" />
        <SectionSubHeading>
          <p>My journey of learning.</p>
          <p className="text-xs">
            Click on the {isMobile ? "ID/EN" : "Indonesia/English"} Button
          </p>
        </SectionSubHeading>
      </div>
      <DashedDivider />
      <Suspense fallback={<div>Loading...</div>}>
        <CourseList />
      </Suspense>
    </div>
  );
}

export default RoadmapPage;
