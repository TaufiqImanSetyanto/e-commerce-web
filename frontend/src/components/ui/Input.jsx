import React from "react";

export default function Input({ name, type, placeholder, title }) {
  return (
    <div>
      <label htmlFor={name} className="text-slate-800 dark:text-white font-medium">
        {title}
      </label>
      <input id={name} className="border my-2 rounded text-sm p-2 w-full focus:outline-none focus:ring-1 focus:ring-emerald-300 dark:bg-semidark border-emerald-900" type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
