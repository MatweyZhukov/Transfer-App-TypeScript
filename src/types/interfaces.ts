import { Dispatch, ChangeEventHandler, SetStateAction } from "react";

type ButtonType = "button" | "reset" | "submit" | undefined;

export interface IButton {
  type: ButtonType;
  onClick?: () => void;
  title: string;
  disabled?: boolean;
}

export interface IInput {
  value?: string;
  placeholder?: string;
  type: string;
  readOnly?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  checked?: boolean | undefined;
}

export interface IBlockInput {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  option: string;
  setOption: Dispatch<SetStateAction<string>>;
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

interface IStyles {
  fontColor?: string;
  bgColor?: string;
  itemBorder?: string;
  bodyBGColor?: string;
  inputFontColor?: string;
  itemsHover?: string;
  checkboxBG?: string;
}

export interface ITheme {
  theme: IStyles;
}
