import React, { memo } from "react";

export const Small = memo(({ value }) => {
  console.log("Small component Render");
  return <small>{value}</small>;
});
