import { defineSchema, defineTable, s } from "convex/schema";

export default defineSchema({
  trees: defineTable({
    id: s.string(),
    health: s.number(),
    neighbors: s.array(s.string()),
  }),
});
