import { Document, Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(
  async ({ db }, tree: string): Promise<null | Document<"trees">> => {
    return await db
      .table("trees")
      .filter(q => q.eq(q.field("id"), tree))
      .first();
  }
);
