import { mutation } from "./_generated/server";

export default mutation(
  async ({ db }, gameCode: string, username: string, healthAdd: number) => {
    const t = await db
      .table("games")
      .filter((q) => q.eq(q.field("id"), gameCode))
      .first();
    if (t && username && t.trees && t.trees.get(username)) {
      t.trees.get(username)!.health = t.trees.get(username)!.health + healthAdd;
      console.log("removing")
      if (t.trees.get(username)!.health < 0) {
        t.trees.get(username)!.health = 0;
      } else if (t.trees.get(username)!.health > 100) {
        t.trees.get(username)!.health = 100;
      }
      console.log("new health")
      console.log(t.trees.get(username)!.health)
      db.replace(t._id, t);
    }
  }
);
