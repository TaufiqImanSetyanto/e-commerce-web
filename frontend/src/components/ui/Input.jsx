import React from "react";

export default function Input({ name, type, placeholder, title, value, handler }) {
  return (
    <div>
      <label htmlFor={name} className="text-slate-800 dark:text-white font-medium">
        {title}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handler}
        required
        className="border my-2 rounded text-sm p-2 w-full focus:outline-none focus:ring-1 focus:ring-emerald-300 dark:bg-semidark border-emerald-900"
      />
    </div>
  );
}
