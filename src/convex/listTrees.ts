import { Document } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(
    async (
      { db },
      game: string
    ): Promise<null | Map<string, { health: number; neighbors: string[] }>> => {
      const t = await db
        .table("games")
        .filter((q) => q.eq(q.field("id"), game))
        .first();
      if (t == null) {
        return null;
      } else {
        return t.trees;
      }
    }
  );