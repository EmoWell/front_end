import React from "react";
import { Button } from "../Components/MovingBorder";

export default function GetStartedBtn() {
  return (
    <div className="mt-24">
      <Button
        borderRadius="1.75rem"
        className= "dark:bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
      >
        Get Started
      </Button>
    </div>
  );
}
