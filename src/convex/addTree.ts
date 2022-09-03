import { mutation } from "./_generated/server";

export default mutation( async ( {db}, game:string, id: string, health: number, neighbors: string[]) => {
    const tree = { health, neighbors};
    const t = await db
    .table("games")
    .filter((q) => q.eq(q.field("id"), game))
    .first();
    if (t != null){
        t.trees.set(id, tree);
        db.replace(t._id, t);
    }
})