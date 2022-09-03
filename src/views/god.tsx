import { useMutation, useQuery } from "../convex/_generated/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function God() {
  const [deadTrees, setDeadTrees] = useState(5);
  const [totalTrees, setTotalTrees] = useState(10);
  const [averageHealth, setAverageHealth] = useState(0.9);

  const lightning = () => {
    console.log("lightning");
  };

  const forestfire = () => {
    console.log("forestfire");
  };

  const flood = () => {
    console.log("flood");
  };

  const drought = () => {
    console.log("drought");
  };

  const bugs = () => {
    console.log("bugs");
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
