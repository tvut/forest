import { useMutation, useQuery } from "../convex/_generated/react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

interface authProps {
  setUser: (user: string) => void;
  setGameID: (user: string) => void;
  userOnly: boolean;
}

function Auth({ userOnly, setUser, setGameID }: authProps) {
  // const existingTrees = useQuery("listTrees") || [];
  const [username, setUsername] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [invalidPass, setInvalidPass] = useState(false);
  const [invalidGameCode, setInvalidGameCode] = useState(false);

  const usernameExists = useQuery("getTree", gameCode, username) ? true : false;
  const noGameCode = useQuery("getGame", gameCode) ? false : true;

  const add = useMutation("addTree");

  const navigate = useNavigate();

  const { urlID } = useParams();

  const processUsername = async () => {
    if (!userOnly) {
      if (noGameCode) {
        console.log("no game code");
        setInvalidGameCode(true);
      } else if (usernameExists) {
        console.log("error, exists");
        setInvalidPass(true);
      } else {
        console.log("success");
        await add(gameCode, username, 100, []);
        setUser(username);
        setGameID(gameCode);
        navigate("/trees");
      }
    } else {
      if (usernameExists) {
        console.log("error, exists");
        setInvalidPass(true);
      } else {
        console.log("success");
        console.log(urlID);
        if (urlID) {
          setGameID(urlID);
          await add(urlID, username, 100, []);
          setUser(username);
        navigate("/trees");
        } else {
          navigate("/");
        }
      }
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <div className="text-white text-4xl text-center mb-8">Forest</div>
        <div className={"box p-8"}>
          <div className="flex flex-col space-y-3">
            {!userOnly && (
              <>
                <h1>Enter a game code: </h1>
                <div>
                  <input
                    value={gameCode}
                    onChange={(e) => setGameCode(e.target.value)}
                    className={
                      "w-64 box p-2 " +
                      (invalidGameCode ? "border-red-400" : "")
                    }
                  ></input>
                  {invalidGameCode && (
                    <div className="py-1 text-red-400">Invalid game code.</div>
                  )}
                </div>
              </>
            )}
            <h1>Enter a username: </h1>
            <div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={
                  "w-64  box p-2 " + (invalidPass ? "border-red-400" : "")
                }
              ></input>
              {invalidPass && (
                <div className="py-1 text-red-400">
                  That username exists. Select a different one.
                </div>
              )}
            </div>
            <div className="flex justify-end">
              <button
                className="box p-2 px-3 !bg-orange-700"
                onClick={processUsername}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link className="mt-4 box p-2 px-3 !bg-blue-700" to="/setup">
            Setup Game
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Auth;
