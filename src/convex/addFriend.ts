import { mutation } from "./_generated/server";

export default mutation(async ({ db }, gameCode: string, user:string ,friends: string) => {
  
  const t = await db
  .table("games")
  .filter((q) => q.eq(q.field("id"), gameCode))
  .first();

  if (t == null) {

    return undefined;

  } else {
    if(user && t.trees && t.trees.get(user) ){
      if (t.trees.get(user)?.neighbors.some(x => x === friends) || t.trees.get(friends) === undefined){
        console.log("already friends")
      }
      else {
        t.trees.get(user)?.neighbors.push(friends)
        t.trees.get(friends)?.neighbors.push(user)


      db.replace(t._id, t);
        }
      }
    else {  
      return undefined;
    }
  }
});
