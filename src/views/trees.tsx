import Tree from '../components/tree';
import { useMutation, useQuery } from "../convex/_generated/react";

function Trees() {

  const addTree = useMutation("addTree");
  const trees = useQuery("listTrees") || [];

  return (
    <div className='w-screen h-screen flex flex-col justify-end'>
      <div className='w-screen flex justify-center'>
        <Tree height={40}/>
      </div>
    </div>
  );
}

export default Trees;
