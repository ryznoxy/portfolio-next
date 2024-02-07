"use client";
import ProjectCard from "./ProjectCards";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { urlFor } from "@/app/lib/sanityImageUrl";
import useSWR from "swr";
import ProjectSkeleton from "./ProjectSkeleton";

const LazyprojectCard = dynamic(() => import("./ProjectCards"));

export default function ProjectsLists() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  const filteredProjects = data?.filter((project) => project?.is_show);

  const imageUrl = (source) => {
    return urlFor(source).url();
  };

  if (isLoading) return <ProjectSkeleton />;

  return (
    <div className="">
      <div className="grid sm:grid-cols-2  justify-center gap-5 mb-10">
        {filteredProjects?.map((project, index) => (
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
  );
}
