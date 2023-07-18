//Global
import { Dispatch, ChangeEventHandler, SetStateAction } from "react";

type ButtonType = "button" | "reset" | "submit" | undefined;

interface IStyles {
  fontColor?: string;
  bgColor?: string;
  itemBorder?: string;
  bodyBGColor?: string;
  inputFontColor?: string;
  itemsHover?: string;
  checkboxBG?: string;
}

export interface ICurrencies {
  AUD: number;
  AZN: number;
  GBP: number;
  AMD: number;
  BYN: number;
  BGN: number;
  BRL: number;
  HUF: number;
  VND: number;
  HKD: number;
  GEL: number;
  DKK: number;
  AED: number;
  USD: number;
  EUR: number;
  EGP: number;
  INR: number;
  IDR: number;
  KZT: number;
  CAD: number;
  QAR: number;
  KGS: number;
  CNY: number;
  MDL: number;
  NZD: number;
  NOK: number;
  PLN: number;
  RON: number;
  XDR: number;
  SGD: number;
  TJS: number;
  THB: number;
  TRY: number;
  TMT: number;
  UZS: number;
  UAH: number;
  CZK: number;
  SEK: number;
  CHF: number;
  RSD: number;
  ZAR: number;
  KRW: number;
  JPY: number;
}

export interface IButton {
  type: ButtonType;
  onClick?: () => void;
  title: string;
  disabled?: boolean;
}

export interface IInput {
  value?: IBlockInput["value"];
  placeholder?: string;
  type: string;
  readOnly?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean | undefined;
}

export interface IBlockInput {
  value: number | "";
  setValue: Dispatch<SetStateAction<IBlockInput["value"]>>;
  option: keyof ICurrencies | "";
  setOption: Dispatch<SetStateAction<IBlockInput["option"]>>;
  placeholder: string;
  readOnly?: boolean;
}

export interface IModal {
  modalClassName: string;
  modalContentClassName: string;
  onClick: () => void;
}

export interface ISVG {
  id: string;
  onClick?: () => void;
  width: number;
  height: number;
}

export interface ITheme {
  theme: IStyles;
}

export interface IOptionsList {
  options: string[];
}

export interface IOptionSingle {
  option: string;
}

export interface IFetchingData {
  disclaimer: string;
  date: string;
  timestamp: number;
  base: string;
  rates: ICurrencies;
}
