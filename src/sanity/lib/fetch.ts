import "server-only";

import type { QueryParams } from "@sanity/client";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = 'skJ16Bg209DSIgeeqsPTfR6xoIUjSlJHkI6jCq04bd6ReyiV8Sx16azlpnoWFj0C8aIMpztRnOsZJ2Os8dB54BZ4oE1l9gaYD3JLWLgA6qjupPaYECe2ngVPVsNMJLn5ZPfD2diz2GspkSiWNuFfNpRc4UaquX4R1DJePrPIJNYegMNuwimv';

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && !token) {
    throw new Error(
      "The SANITY_API_READ_TOKEN environment variable is required."
    );
  }
  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: true })
    .fetch<QueryResponse>(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...(isDraftMode && {
        token: token,
        perspective: "previewDrafts",
      }),
      next: {
        ...(isDraftMode && { revalidate: 30 }),
        tags,
      },
    });
}