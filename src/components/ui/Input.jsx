import React from "react";

export default function Input({ name, type, placeholder, title }) {
  return (
    <div>
      <label htmlFor={name} className="text-slate-600 font-medium">
        {title}
      </label>
      <input id={name} className="border my-2 rounded text-sm p-2 w-full focus:outline-cyan-400" type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
