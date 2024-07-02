import React from "react";

const Button = ({ text, color }) => {
  let colorClass = "";
  switch (color) {
    case "dark":
      colorClass = "bg-yellow-500 text-white";
      break;
    case "light":
      colorClass = "bg-yellow-200 text-gray-800";
      break;
    // case "yellow":
    // default:
    //   colorClass = "bg-yellow-300 hover:bg-yellow-400 text-gray-800";
    //   break;
    case "danger":
      colorClass = "bg-red-500 text-white";
      break;
  }

  return (
    <button className={`px-4 py-2 rounded-md focus:outline-none ${colorClass}`}>
      {text}
    </button>
  );
};

export default Button;
