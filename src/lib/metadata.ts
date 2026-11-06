import type { Metadata } from "next";

export function pageMeta({
  title,
  description,
  path,
  absolute = false,
}: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const fullTitle = absolute ? title : `${title} — muzyhr`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      locale: "en_CA",
      type: "website",
      siteName: "muzyhr",
    },
  };
}
