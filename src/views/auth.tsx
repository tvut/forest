import { useMutation, useQuery } from "../convex/_generated/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

interface authProps{
  setUser: (user: string)=>void
}

function Auth({ setUser }: authProps){

    // const existingTrees = useQuery("listTrees") || [];
    const [username, setUsername] = useState("");
    const [invalidPass, setInvalidPass] = useState(false);

    const usernameExists = useQuery("getTree", username) ? true : false;
    const add = useMutation("addTree")

    const navigate = useNavigate()

    const processUsername = async () => {
        if(usernameExists){
            console.log("error, exists")
            setInvalidPass(true);
        } else {
            console.log("success")
            await add(username, 100, [])
            setUser(username)
            navigate('/trees')
        }
    };

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div>
      <div className="text-white text-4xl text-center mb-8">
        Forest
      </div>
      <div className={"box p-8"} >
        <div className="flex flex-col space-y-3">
            <h1>Enter a username: </h1>
            <div>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className={"w-96 box p-2" + (invalidPass ? "border-red-400" : "")}></input>
            {invalidPass && <div className="py-1 text-red-400">That username exists. Select a different one.</div>}
            </div>
            <div className="flex justify-end">
            <button className="box p-2 px-3 !bg-orange-700" onClick={processUsername}>Submit</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Auth;
