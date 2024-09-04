import React from "react";
import { BsBoxArrowInDown } from "react-icons/bs";

const SelectColumn = ({ index, updateBoard }) => {
  return (
    <button
        onClick={() => updateBoard(index)} 
        className="border-t-2 flex justify-center items-center"
        >
      <BsBoxArrowInDown className="text-5xl" />
    </button>
  );
};

export default SelectColumn;
