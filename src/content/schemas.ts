import { z } from 'zod';

export const PillarEnum = z.enum(['rf', 'energy', 'wsn']);
export type Pillar = z.infer<typeof PillarEnum>;

export const PublicationTypeEnum = z.enum(['journal', 'conference', 'book-chapter', 'preprint']);
export type PublicationType = z.infer<typeof PublicationTypeEnum>;

export const StatusEnum = z.enum(['published', 'draft']);
export type Status = z.infer<typeof StatusEnum>;

export const PublicationSchema = z.object({
  id: z.string().min(1, 'Publication id is required'),
  title: z.string().min(1, 'Publication title is required'),
  authors: z.array(z.string()).min(1, 'At least one author is required'),
  venue: z.string().min(1, 'Venue is required'),
  year: z.number().int().min(1990).max(2035),
  type: PublicationTypeEnum,
  doi: z.string().optional(),
  url: z.string().url().optional().or(z.literal('')),
  abstract: z.string().optional(),
  bibtex: z.string().optional(),
  featured: z.boolean().optional().default(false),
  pillar: PillarEnum.optional(),
});

export type Publication = z.infer<typeof PublicationSchema>;

export const SpecItemSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const LinkItemSchema = z.object({
  label: z.string().min(1),
  url: z.string().min(1),
});

export const ProjectMetaSchema = z.object({
  title: z.string().min(1, 'Project title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens'),
  summary: z.string().min(1, 'Summary is required'),
  pillar: PillarEnum,
  tools: z.array(z.string()).min(1, 'At least one tool is required'),
  cover: z.string().optional(),
  featured: z.boolean().optional().default(false),
  year: z.number().int().optional(),
  specs: z.array(SpecItemSchema).optional(),
  links: z.array(LinkItemSchema).optional(),
  status: StatusEnum.default('published'),
});

export type ProjectMeta = z.infer<typeof ProjectMetaSchema>;

export const NoteMetaSchema = z.object({
  title: z.string().min(1, 'Note title is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase alphanumeric with hyphens'),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be ISO format YYYY-MM-DD'),
  summary: z.string().min(1, 'Summary is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  pillar: PillarEnum.optional(),
  status: StatusEnum.default('published'),
});

export type NoteMeta = z.infer<typeof NoteMetaSchema>;

