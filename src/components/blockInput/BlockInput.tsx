//Global
import { useEffect, useState } from "react";
import getData from "../../hooks/http.hook";
import { v4 as uuid } from "uuid";

//Components
import Input from "../UI/inputs/Input";

//Styles
import "./blockInput.css";

//Types
import { IBlockInput } from "../../types/interfaces";

function BlockInput({
  value,
  setValue,
  option,
  setOption,
  placeholder,
  readOnly,
}: IBlockInput) {
  const [options, setOptions] = useState<string[]>([]);

  useEffect(() => {
    getData("https://www.cbr-xml-daily.ru/latest.js")
      .then((data) => {
        if ("rates" in data) {
          const optionsArr = Object.entries(data.rates);
          optionsArr.forEach((item) => item.pop());
          const resultArr = optionsArr.map((item) => item[0]);

          setOptions(resultArr);
        }
      })
      .catch((err) => console.log(err));

    //eslint-disable-next-line
  }, []);

  return (
    <div className="block-input">
      <Input
        readOnly={readOnly}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={placeholder}
        type="number"
      />

      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="Currency...">Currency...</option>
        {options.map((option) => {
          const id: string = uuid();
          return (
            <option value={option} key={id}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default BlockInput;
