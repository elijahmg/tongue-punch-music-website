// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content'

// 2. Import loader(s)
import { file } from 'astro/loaders'

// 3. Import Zod
import { z } from 'astro/zod'

const concertSchema = z.object({
  city: z.string(),
  venue: z.string(),
  venueHref: z.string().url(),
  date: z.string(),
  time: z.string(),
  ticketInfo: z.string().optional()
})

const gigs = defineCollection({
  loader: file('./src/data/gigs.json'),
  schema: concertSchema
})


// 5. Export a single `collections` object to register your collection(s)
export const collections = { gigs }