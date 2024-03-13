import React from "react";

export default function Button({children,handler}) {
  return <button onClick={handler} className="border rounded-md bg-cyan-700 hover:bg-cyan-600 text-white font-semibold w-full p-1 pb-1.5 ">{children}</button>;
}