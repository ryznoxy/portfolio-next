"use client";
import ProjectCard from "./ProjectCards";
import DashedDivider from "@/app/commons/components/elements/DashedDivider";
import SectionHeading from "@/app/commons/components/elements/SectionHeading";
import SectionSubHeading from "@/app/commons/components/elements/SectionSubHeading";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { urlFor } from "@/app/lib/sanityImageUrl";

const LazyprojectCard = dynamic(() => import("./ProjectCards"));

export default function ProjectsLists({ PROJECT }) {
  const filteredProjects = PROJECT?.filter((project) => project?.is_show);

  if (filteredProjects.length === 0) {
    return <SectionHeading title={"No Projects Found"} />;
  }

  const imageUrl = (source) => {
    return urlFor(source).url();
  };

  return (
    <div className="">
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="Projects" />
          <SectionSubHeading>
            <p className="dark:text-neutral-400">
              Showcasing my passion for technology, design, and problem-solving
              through code.
            </p>
          </SectionSubHeading>
        </div>
        <DashedDivider />
        <div className="grid sm:grid-cols-2  justify-center gap-5 mb-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <ProjectCard
                is_featured={project.is_featured}
                Index={index}
                key={index}
                image={imageUrl(project.image)}
                title={project.title}
                description={project.description}
                tech_stack={project.tech_stack}
                slug={project.slug.current}
                link_demo={project.link_demo}
                link_github={project.link_github}
              />
              {/* <LazyprojectCard
                is_featured={project.is_featured}
                Index={index}
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                tech_stack={project.tech_stack}
                slug={project.slug}
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
