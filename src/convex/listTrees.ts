import { Document } from "./_generated/dataModel";
import { query } from "./_generated/server";

export default query(async ({ db }): Promise<Document<"trees">[]> => {
  return await db.table("trees").collect();
});