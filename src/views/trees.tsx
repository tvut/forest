import { useState } from 'react';
import Tree from '../components/tree';
import { useMutation, useQuery } from "../convex/_generated/react";

interface TreeProps {
  user: string,
  gameCode: string
}

function Trees({ user, gameCode }: TreeProps) {

  // const trees = useQuery("listTrees") || [];

  const tree = useQuery("getTree", gameCode, user);

  const [friend, setFriend] = useState("")

  const add = useMutation("addFriend");
  const addFriend = () => {
    add(gameCode, user, friend);

  }

  return (
    <div className='w-screen h-screen flex flex-col justify-end'>
      <div className='text-white absolute top-2 left-2'>Game: {gameCode}</div>
      <div className='text-white absolute top-7 left-2'>User: {user}</div>
      <div className='text-white absolute top-12 left-2'>Friends: {tree?.neighbors.length}</div>
      <div className='text-white absolute top-16 mt-1 left-2'>Health: {tree?.health}</div>
      <div className='absolute top-2 right-2 flex space-x-3'>
        <input className='w-32 p-2 box' value={friend} onChange={(e) => setFriend(e.target.value)}></input>
        <button className='p-2 px-3 box' onClick={addFriend}>Add</button>
      </div>
      <div className='flex-grow flex'>
        {/* <Tree height={20}/> */}
      </div>
      <div className='w-screen flex justify-center'>
        <Tree health={tree?.health} height={40}/>
      </div>
    </div>
  );
}

export default Trees;
