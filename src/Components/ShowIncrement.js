import React, { memo } from "react";

export const ShowIncrement = memo(({ increment }) => {
  console.log("Me volvi a llamar");
  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      increment
    </button>
  );
});
