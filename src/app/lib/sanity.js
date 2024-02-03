import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SECRET_PROJECTID_SANITY;
const dataset = "production";
const apiVersion = "2022-03-07";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
