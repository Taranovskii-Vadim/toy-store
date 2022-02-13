import * as React from "react";

interface IProps {
  color?: string;
}

const Plus: React.FC<IProps> = ({ color = "white" }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="plus"
    >
      <path
        d="M11 1V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M21 11H1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default Plus;
