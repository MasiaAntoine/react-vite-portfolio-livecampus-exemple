import React from "react";

const ButtonDelete = ({ onDelete }) => {
  return (
    <img
      className="size-12 absolute -right-3 -top-3 animate-shake cursor-pointer"
      src="/src/assets/images/trash.png"
      onClick={onDelete}
    />
  );
};

export default ButtonDelete;
