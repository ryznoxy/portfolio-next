import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion, useCdn } from "../../../sanity/env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
