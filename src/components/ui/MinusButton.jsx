import React from "react";
import {FiMinus} from "react-icons/fi";

export default function MinusButton ({handler}){
    return <FiMinus onClick={handler} className="cursor-pointer" />
}