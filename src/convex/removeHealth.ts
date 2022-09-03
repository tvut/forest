import { mutation } from "./_generated/server";

export default mutation( async ( {db}, game:string, damage:number ) => {
    const t = await db
    .table("games")
    .filter((q) => q.eq(q.field("id"), game))
    .first();
    if (t != null){
        t.trees.forEach(e => {
            e.health = Math.max(e.health - damage, 0);
        })
        db.replace(t._id, t);
    }
})