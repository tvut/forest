import { mutation } from "./_generated/server";

export default mutation(( {db}, id: string, health: number, neighbors: string[]) => {
    const tree = { id, health, neighbors};
    db.insert("trees", tree);
})