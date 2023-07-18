//Global
import { FC } from "react";

//Types
import { IOptionSingle } from "../../types/types";

const OptionSingle: FC<IOptionSingle> = ({ option }) => {
  return <option value={option}>{option}</option>;
};

export default OptionSingle;
