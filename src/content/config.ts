import { defineCollection, z } from "astro:content";

const games = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: image(),
      shortDescription: z.string(),
      category: z.enum(["personal", "gamejam", "professional"]),
      engine: z.string().optional(),
      skills: z.array(z.string()).default([]),
      itchLink: z.string().url().optional(),
      githubLink: z.string().url().optional(),
    }),
});

export const collections = { games };
