import { mutation } from "./_generated/server";

export default mutation(( {db}, id: string) => {
    let trees = new Map([]) as any
    const game = { id, trees };
    db.insert("games", game);
})