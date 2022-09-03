import { Document, Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(
  async ({ db }, game: string): Promise<null | Document<"games">> => {
    return await db
      .table("games")
      .filter(q => q.eq(q.field("id"), game))
      .first();
  }
);