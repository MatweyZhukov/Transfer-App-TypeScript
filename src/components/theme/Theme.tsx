//Global
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "./ChangeTheme";
import { useState } from "react";

//Components
import Input from "../UI/inputs/Input";

//Styles
import "./theme.css";

function Theme() {
  const [theme, setTheme] = useState<string>("light"),
    [checkbox, setCheckbox] = useState<boolean | undefined>(undefined);

  function switchTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function switchCheckbox() {
    setCheckbox(checkbox && undefined);
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="theme">
        <h1>Dark Theme</h1>

        <label className="checkbox-ya">
          <Input onChange={switchCheckbox} checked={checkbox} type="checkbox" />
          <span onClick={switchTheme} className="checkbox-ya-switch">
            <span
              className="checkbox-ya-feature"
              data-label-on="ON"
              data-label-off="OFF"
            ></span>
          </span>
        </label>
      </div>
    </ThemeProvider>
  );
}

export default Theme;
