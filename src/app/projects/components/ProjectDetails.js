import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import BackButton from "@/app/commons/components/elements/BackButton";
import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import { SiGithub } from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import { STACKS_LIST } from "@/app/commons/constants/SkillLists";
import { urlFor } from "@/app/lib/sanityImageUrl";

export default async function ProjectDetail({ project }) {
  const stackArray = Object.entries(STACKS_LIST);

  const stackList = stackArray.filter((item) =>
    project?.tech_stack?.includes(item[0])
  );

  const imageToURL = (source) => {
    return urlFor(source).url();
  };

  return (
    <>
      <div className="h-screen">
        {project && (
          <div className="space-y-6 ">
            <div className="space-y-2">
              <BackButton href={"/projects"} />
              <SectionHeading title={project.title} />
              <SectionSubHeading>
                <p>{project.description}</p>
              </SectionSubHeading>
            </div>
            <DashedDivider />
            <div className="space-y-2">
              <div className="flex md:justify-between md:flex-row flex-col space-y-6 md:space-y-0">
                <div className="flex  items-center gap-2 text-sm">
                  Tech Stack :
                  <div className="flex items-center  text-2xl gap-4">
                    {stackList.map((children) => {
                      return <>{children[1]}</>;
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={project?.link_github}
                    className="flex items-center gap-2"
                  >
                    <SiGithub className="text-2xl" /> Source Code
                  </Link>{" "}
                  |{" "}
                  <Link
                    href={project?.link_demo}
                    className="flex items-center gap-2"
                  >
                    <BiLinkExternal className="text-2xl" /> Demo
                  </Link>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <Image
                src={imageToURL(project.image)}
                alt={project.title}
                width={900}
                height={900}
                priority
                className="w-full hover:scale-105 scale-100 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
