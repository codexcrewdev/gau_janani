import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "46w3pos2",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});