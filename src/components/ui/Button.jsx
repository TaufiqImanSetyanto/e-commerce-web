import React from "react";

export default function Button({children,handler}) {
  return <button onClick={handler} className="border rounded-md bg-emerald-700 border-none hover:bg-emerald-900  text-white font-semibold w-full p-1 mt-2">{children}</button>;
}
