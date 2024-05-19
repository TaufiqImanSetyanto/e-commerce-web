import React from "react";
import {FiPlus} from "react-icons/fi";

export default function PlusButton ({handler}){
    return <FiPlus onClick={handler} className="cursor-pointer" />
}