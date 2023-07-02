//Types
import { IButton } from "../../../types/interfaces";

function Button({ type, onClick, title, disabled }: IButton) {
  return (
    <button disabled={disabled} type={type} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
