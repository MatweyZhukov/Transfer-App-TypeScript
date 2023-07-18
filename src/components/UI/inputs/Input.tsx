//Global
import { FC } from "react";

//Types
import { IInput } from "../../../types/types";

const Input: FC<IInput> = ({
  value,
  placeholder,
  type,
  readOnly,
  onChange,
  checked,
}) => {
  return (
    <input
      checked={checked}
      value={String(value)}
      placeholder={placeholder}
      type={type}
      onChange={readOnly ? undefined : onChange}
      readOnly={readOnly}
    />
  );
};

export default Input;
