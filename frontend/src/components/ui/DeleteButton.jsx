import React from "react";
import {FiTrash2} from "react-icons/fi";

export default function DeleteButton({ handler }) {
  return <FiTrash2 onClick={handler} className="text-red-700 hover:origin-bottom hover:-rotate-12 hover:scale-105 transition-all cursor-pointer " />;
}
