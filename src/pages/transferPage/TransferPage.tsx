//Components
import Button from "../../components/UI/buttons/Button";
import BlockInput from "../../components/blockInput/BlockInput";
import Modal from "../../components/modal/Modal";

//Global
import { FormEvent, useState, FC } from "react";
import axios from "axios";

//Types
import { ICurrencies, IFetchingData, IBlockInput } from "../../types/types";

//Styles
import "./transferPage.css";

const TransferPage: FC = () => {
  const [fromCurrency, setFromCurrency] = useState<IBlockInput["value"]>(""),
    [toCurrency, setToCurrency] = useState<IBlockInput["value"]>("");

  const [optionFrom, setOptionFrom] = useState<keyof ICurrencies | "">(""),
    [optionTo, setOptionTo] = useState<keyof ICurrencies | "">("");

  const [modal, setModal] = useState<boolean>(false);

  const [disabled, setDisabled] = useState<boolean>(false);

  let modalClassName: string = "modal",
    modalContentClassName: string = "modal-content";

  if (!modal) {
    modalClassName += " modal-hidden";
    modalContentClassName += " modal-content-hidden";
  } else {
    modalClassName += " modal-opened";
    modalContentClassName += " modal-content-opened";
  }

  async function fetchCurrencies(url: string) {
    try {
      const response = await axios.get<IFetchingData>(url);

      const currValue =
        +fromCurrency / +response.data.rates[optionFrom as keyof ICurrencies];

      const result =
        currValue * +response.data.rates[optionTo as keyof ICurrencies];

      if (fromCurrency && optionTo && optionFrom) {
        setToCurrency(result % 1 === 0 ? +result : +result.toFixed(5));
      }
    } catch (e) {
      console.log(e);
    }
  }

  function changeModalStatus() {
    if (!fromCurrency || !optionTo || !optionFrom) {
      setModal(!modal);
      setDisabled(!disabled);
    }
  }

  function changeCurrencyOption(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    fetchCurrencies("https://www.cbr-xml-daily.ru/latest.js");
  }

  return (
    <form
      onSubmit={(e) => {
        changeCurrencyOption(e);
        changeModalStatus();
      }}
      className="transfer"
    >
      <h1>Transfer to currency</h1>

      <BlockInput
        value={fromCurrency}
        setValue={setFromCurrency}
        option={optionFrom}
        setOption={setOptionFrom}
        placeholder={"from..."}
      />

      <div className="buttons">
        <Button disabled={disabled} type="submit" title={"transfer"} />

        <Button
          type="reset"
          onClick={() => {
            setFromCurrency("");
            setToCurrency("");
            setOptionFrom("");
            setOptionTo("");
          }}
          title={"clear"}
        />
      </div>

      <BlockInput
        readOnly={true}
        value={toCurrency}
        setValue={setToCurrency}
        option={optionTo}
        setOption={setOptionTo}
        placeholder={"to..."}
      />

      <Modal
        onClick={changeModalStatus}
        modalClassName={modalClassName}
        modalContentClassName={modalContentClassName}
      />
    </form>
  );
};

export default TransferPage;
