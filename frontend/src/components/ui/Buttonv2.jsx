import React from "react";

export default function Buttonv2({ children,handler }) {
  return <button onClick={handler} className="border-[1.5px] border-emerald-700 dark:text-white rounded-sm px-5 font-normal pb-0.5 ">{children}</button>;
}
