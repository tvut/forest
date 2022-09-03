import Tree from '../components/tree';
import { useMutation, useQuery } from "../convex/_generated/react";

interface TreeProps {
  user: string,
}

function Trees({ user }: TreeProps) {

  const trees = useQuery("listTrees") || [];

  const tree = useQuery("getTree", user);

  return (
    <div className='w-screen h-screen flex flex-col justify-end'>
      <div className='text-white absolute top-2 left-2'>User: {user}</div>
      <div className='text-white absolute top-7 left-2'>Friends: {tree?.neighbors.length}</div>
      <div className='w-screen flex justify-center'>
        <Tree height={40}/>
      </div>
    </div>
  );
}

export default Trees;
