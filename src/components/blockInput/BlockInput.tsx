//Global
import { useEffect, useState, FC } from "react";
import axios from "axios";

//Components
import Input from "../UI/inputs/Input";
import OptionsList from "../optionsList/OptionsList";

//Types
import { IBlockInput, IFetchingData } from "../../types/types";

//Styles
import "./blockInput.css";

const BlockInput: FC<IBlockInput> = ({
  value,
  setValue,
  option,
  setOption,
  placeholder,
  readOnly,
}) => {
  const [options, setOptions] = useState<string[]>([]);

  async function fetchOptions(url: string) {
    try {
      const response = await axios.get<IFetchingData>(url);

      const optionsArr = Object.entries(response.data.rates);
      optionsArr.forEach((item) => item.pop());
      const resultArr = optionsArr.map((option) => option[0]);

      setOptions(resultArr);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchOptions("https://www.cbr-xml-daily.ru/latest.js");

    //eslint-disable-next-line
  }, []);

  return (
    <div className="block-input">
      <Input
        readOnly={readOnly}
        onChange={(e) => setValue(e.target.value as IBlockInput["value"])}
        value={value}
        placeholder={placeholder}
        type="number"
      />

      <select
        value={option}
        onChange={(e) => setOption(e.target.value as IBlockInput["option"])}
      >
        <OptionsList options={options} />
      </select>
    </div>
  );
};

export default BlockInput;
