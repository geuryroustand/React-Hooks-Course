import React, { useMemo, useState } from "react";
import "./effects.css";
import { useCounter } from "./Hooks/useCounter";
export const MemoHook = () => {
  const { counter, increment } = useCounter(100);
  const [show, setShow] = useState(true);

  const heavyProcess = (iterator) => {
    for (let index = 0; index < iterator; index++) {
      console.log("Lets go....");
    }
    return `${iterator} iterator process done`;
  };

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h2>MemoHook</h2>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoHeavyProcess}</p>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>

      <button
        onClick={() => setShow(!show)}
        className="btn btn-outline-primary ml-3"
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
