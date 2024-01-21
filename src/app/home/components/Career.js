import { CareerLists } from "@/app/commons/constants/CareerLists";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import Link from "next/link";
import SectionHeading from "./../../commons/components/elements/SectionHeading";
import SectionSubHeading from "../../commons/components/elements/SectionSubHeading";
import CareerCard from "./CareerCard";

export default function Career() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <SectionHeading
          icon={<BiBriefcaseAlt2 className="mr-1" />}
          title={"Career"}
        />
        <SectionSubHeading>
          <p className="dark:text-neutral-400 text-md font-light">
            My professional career journey.
          </p>
        </SectionSubHeading>
        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {CareerLists.map((careers, index) => (
            <CareerCard key={index} {...careers} />
          ))}
        </div>
      </div>
    </div>
  );
}
