import { Document, Id } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(
  async (
    { db },
    gameCode: string,
    username: string
  ): Promise<undefined | { health: number; neighbors: string[] }> => {
    const t = await db
      .table("games")
      .filter((q) => q.eq(q.field("id"), gameCode))
      .first();
      console.log(gameCode)
      console.log(username)
    if (t == null) {
      return undefined;
    } else {
      if(username && t.trees && t.trees.get(username)){
        return t.trees.get(username)
      } else {
        return undefined;
      }
    }
  }
);
