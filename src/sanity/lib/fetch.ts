//import "server-only";
import type { QueryParams } from "@sanity/client";
import { client } from "./client";

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string;
  params?: QueryParams;
  tags?: string[];
}): Promise<QueryResponse> {
  // Extiende QueryParams para incluir token y tag
  const fetchOptions: QueryParams & { token?: string; tag?: string } = {
    ...params,
  };

  // Agregar el token si está disponible
  if (token) {
    fetchOptions.token = token as string; // Forzar a TypeScript a aceptar el tipo string
  }

  // Agregar las etiquetas si están disponibles
  if (tags.length > 0) {
    fetchOptions.tag = tags.join(","); // No se necesita `as any`
  }

  return client.fetch(query, fetchOptions);
}