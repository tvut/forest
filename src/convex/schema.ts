import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  games: defineTable({
    id: s.string(),
    trees: s.map(s.string(), s.object({health: s.number(), neighbors: s.array(s.string())}))
  }),
});
