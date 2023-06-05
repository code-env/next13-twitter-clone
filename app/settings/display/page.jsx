import React from "react";
import { ColorDisplay, ThemeDisplay } from "@components";

const Display = () => {
  return (
    <div className="flex flex-col gap-8">
      <ColorDisplay />
      <ThemeDisplay />
    </div>
  );
};

export default Display;
