//Styles
import "./modal.css";

//Components
import { SVG } from "../SVG/SVG";

//Types
import { IModal } from "../../types/interfaces";

function Modal({ modalClassName, modalContentClassName, onClick }: IModal) {
  return (
    <div className={modalClassName}>
      <div className={modalContentClassName}>
        <div className="close">
          <SVG onClick={onClick} id="close" width={30} height={30} />
        </div>
        <div className="header">
          <p>Attention</p>
          <SVG id="attention" width={50} height={50} />
        </div>
        <p>
          Fill in the fields, and select the currencies, before clicking on the
          button.
        </p>
      </div>
    </div>
  );
}

export default Modal;
