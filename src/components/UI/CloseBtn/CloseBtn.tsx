import * as React from "react";
import Plus from "../Plus";

interface IProps {
  clickHandler: () => void;
}

const CloseBtn: React.FC<IProps> = ({ clickHandler }) => (
  <span className="closeBtn" onClick={clickHandler}>
    <Plus />
  </span>
);

export default CloseBtn;
