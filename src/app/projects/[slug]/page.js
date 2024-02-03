import ContainerAOS from "@/app/commons/components/elements/ContainerAOS";
import React from "react";
import ProjectDetail from "./../components/ProjectDetails";
import { groq } from "next-sanity";
import { client } from "@/app/lib/sanity";

async function getDataProjectsSlug(slug) {
  const query = groq`*[_type == "projects" && slug.current == "${slug}"][0]`;

  const data = await client.fetch(query);

  return data;
}
export const dynamic = "force-dynamic";
export const revalidate = 60;

const ProjectDetailPage = async ({ params }) => {
  const data = await getDataProjectsSlug(params.slug);

  return (
    <div>
      <ContainerAOS>
        <ProjectDetail project={data} />
      </ContainerAOS>
    </div>
  );
};

export default ProjectDetailPage;

