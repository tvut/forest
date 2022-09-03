import { useMutation, useQuery } from "../convex/_generated/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface godProps {
  gameID: string;
}

function God({ gameID }: godProps) {
  const game = useQuery("getGame", gameID);

  const totalTrees = game?.trees.size || 0;
  const deadTrees =
    (game &&
      Array.from(game.trees.values()).filter((t) => t.health <= 0).length) ||
    0;
  const averageHealth =
    (game &&
      Array.from(game.trees.values()).reduce(
        (acc, val) => acc + val.health,
        0
      ) / game?.trees.size) ||
    0;

  const removeAll = useMutation("removeHealth");
  const singleTreeAdd = useMutation("singleTreeHealth");

  const lightning = () => {
    console.log("lightning");
    if (game?.trees) {
      let keys = Array.from(game?.trees.keys());
      let toRemove = keys[Math.floor(Math.random() * keys.length)];
      singleTreeAdd(gameID, toRemove, -100);
      console.log("fully killed " + toRemove);
    }
    let mult = deadTrees / (totalTrees - deadTrees) || 0
    console.log(mult)
    if(Math.min() * mult > 0.95){
        forestfire()
    }
  };

  const forestfire = () => {
    console.log("forestfire");
    removeAll(gameID, 10 + Math.round((deadTrees / totalTrees) * 10));
  };

  const flood = () => {
    console.log("flood");
    removeAll(gameID, 5 + Math.round((deadTrees / totalTrees) * 5));
  };

  const drought = () => {
    console.log("drought");
    removeAll(gameID, 5);
  };

  const bugs = () => {
    console.log("bugs");
    removeAll(gameID, Math.round(3 + 10 * Math.random()));
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="box">
        {/* status bar */}
        <div>
          <div>{deadTrees}</div>
          <div>{totalTrees}</div>
          <div>{averageHealth}</div>
        </div>
        {/* actions */}
        <div className="flex space-x-3">
          <button onClick={lightning}>Lightning</button>
          <button onClick={forestfire}>Forest Fire</button>
          <button onClick={flood}>Flood</button>
          <button onClick={drought}>Drought</button>
          <button onClick={bugs}>Bugs</button>
        </div>
      </div>
    </div>
  );
}

export default God;
