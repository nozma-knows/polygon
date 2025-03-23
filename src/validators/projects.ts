import { z } from "zod";
import { DocumentSchema } from "./documents";

export const ProjectSchema = z.object({
  id: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  name: z.string(),
  description: z.string().nullable(),
  organizationId: z.string(),
  userId: z.string(),
  documents: z.array(DocumentSchema).nullable(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const CreateProjectSchema = ProjectSchema.omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true, 
  organizationId: true, 
  userId: true,
  documents: true,
});

export const UpdateProjectSchema = ProjectSchema.omit({
  createdAt: true,
  updatedAt: true,
  organizationId: true,
  userId: true,
}).partial();



