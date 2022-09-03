import { useMutation, useQuery } from "../convex/_generated/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tree from "../components/tree";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faDroplet,
  faWater,
  faFire,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import QRCode from "react-qr-code";

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
    let mult = deadTrees / (totalTrees - deadTrees) || 0;
    console.log(mult);
    if (Math.min() * mult > 0.95) {
      forestfire();
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

  const trees = useQuery("listTrees", gameID);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="box text-center p-3 flex justify-center items-center">
        <div>
          <h3 className="text-xl">Game ID:</h3>
          <h1 className="text-4xl">{gameID}</h1>
        </div>
        <div className="ml-10">
          <QRCode
            title="Game Code"
            value={"https://forested.tech/known/" +gameID}
            bgColor={"#1F2937"}
            fgColor={"white"}
            size={80}
          />
        </div>
      </div>
      <div className="flex-grow flex-col">
        <div className="p-8 flex flex-wrap w-screen flex items-center justify-center">
          {trees &&
            Array.from(trees.keys()).map((s) => {
              return (
                <Tree key={s} health={trees?.get(s)?.health} height={20} />
              );
            })}
        </div>
      </div>
      <div className="box bg-white">
        {/* status bar */}
        <div className="w-screen flex">
          <div className="flex-grow text-right m-4 p-2 bg-red-700 rounded-xl">
            <h2 className="text-xl">Dead Trees</h2>
            <h1 className="text-3xl">{deadTrees}</h1>
          </div>
          <div className="flex-grow text-right m-4 p-2 bg-green-700 rounded-xl">
            <h2 className="text-xl">Total Trees</h2>
            <h1 className="text-3xl">{totalTrees}</h1>
          </div>
          <div className="flex-grow text-right m-4 p-2 bg-yellow-500 rounded-xl">
            <h2 className="text-xl">Average Health</h2>
            <h1 className="text-3xl">{averageHealth}</h1>
          </div>
        </div>
        {/* actions */}
        <div className="actionButtons flex w-screen space-x-4">
          <button className="!bg-yellow-300 text-black" onClick={lightning}>
            <FontAwesomeIcon icon={faBolt} />
            Lightning
          </button>
          <button className="!bg-red-400" onClick={forestfire}>
            <FontAwesomeIcon icon={faFire} />
            Forest Fire
          </button>
          <button className="!bg-blue-700" onClick={flood}>
            <FontAwesomeIcon icon={faWater} />
            Flood
          </button>
          <button className="!bg-blue-300" onClick={drought}>
            <FontAwesomeIcon icon={faDroplet} />
            Drought
          </button>
          <button className="!bg-orange-800" onClick={bugs}>
            <FontAwesomeIcon icon={faBug} />
            Bugs
          </button>
        </div>
      </div>
    </div>
  );
}

export default God;
