import { mutation } from "./_generated/server";

export default mutation(async ({ db }, gameCode: string, user:string) => {

  const t = await db
  .table("games")
  .filter((q) => q.eq(q.field("id"), gameCode))
  .first();

  if (t == null) {

    return undefined;

  } else {
    if(user && t.trees && t.trees.get(user)){

        if (t.trees.get(user)!.health <= 90) {
        t.trees.get(user)!.health = 100;
        } else {
            t.trees.get(user)!.health += 10;
        }

        

        
        db.replace(t._id, t);

      }
    else {  
      return undefined;
    }
  }
});

