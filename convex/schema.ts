import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({
  boards: defineTable({
    title: v.string(),
    authorName: v.string(),
    authorId: v.string(),
    orgId: v.string(),
    bg_colors:v.string(),
    imageUrl: v.string(),
  }).index("by_org", ["orgId"])
  .searchIndex("search_title",{
    searchField:"title",
    filterFields:["orgId"]
  })
});