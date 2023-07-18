//Global
import { FC } from "react";
import { v4 as uuid } from "uuid";

//Components
import OptionSingle from "../optionSingle/OptionSingle";

//Types
import { IOptionsList } from "../../types/types";

const OptionsList: FC<IOptionsList> = ({ options }) => {
  return (
    <>
      <option value="Currency...">Currency...</option>
      {options.map((option) => {
        const id: string = uuid();
        return <OptionSingle option={option} key={id} />;
      })}
    </>
  );
};

export default OptionsList;
