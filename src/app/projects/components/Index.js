import { groq } from "next-sanity";
import ProjectLists from "./ProjectLists";
import { client } from "@/app/lib/sanity";

async function getDataProjects() {
  const query = groq`*[_type == "projects"] | order(_createdAt desc)`;

  const data = await client.fetch(query);

  return data;
}
export const dynamic = "force-dynamic";
export const revalidate = 60;

export default async function Index() {
  const data = await getDataProjects();

  return (
    <div className="h-full">
      <ProjectLists PROJECT={data} />
    </div>
  );
}
