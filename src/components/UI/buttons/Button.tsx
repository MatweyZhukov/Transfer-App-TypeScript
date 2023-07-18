//Global
import { FC } from "react";

//Types
import { IButton } from "../../../types/types";

const Button: FC<IButton> = ({ type, onClick, title, disabled }) => {
  return (
    <button disabled={disabled} type={type} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
