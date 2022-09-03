import { useMutation, useQuery } from "../convex/_generated/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface setupProps {
  setGameID: (user: string) => void;
}

function Setup({ setGameID }: setupProps) {

    const add = useMutation("addGameID");
    const [gameCode, setGameCode] = useState("");

    const generateGameCode = async () => {
      const rand = Math.random().toString(16).substr(2, 6).toUpperCase();
        await add(rand);
        console.log("added");
        setGameID(rand);
        setGameCode(rand);
    }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <div className="text-white text-4xl text-center mb-8">Forest</div>
        <div className={"box p-8"}>
          <div className="flex flex-col space-y-3">
            <h1>Generate a game code: </h1>
            { gameCode }
            <div className="flex justify-end">
              <button
                className="box p-2 px-3 !bg-orange-700"
                onClick={generateGameCode}
              >
                Generate
              </button>
            </div>
          </div>
        </div>
                <Link
          className="mt-4 box p-2 px-3 !bg-blue-700"
          to="/god"
        >
          God Mode
        </Link>
      </div>
    </div>
  );
}

export default Setup;
