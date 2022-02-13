import * as React from "react";

interface LogoInfoProps {
  icon: string;
  name: string;
  description: string;
}

const LogoInfo: React.FC<LogoInfoProps> = ({ icon, name, description }) => {
  return (
    <React.Fragment>
      <img className="icon" src={icon} alt="logo" />
      <div className="info">
        <h3 className="logoTitle">{name}</h3>
        <small className="LogoDescription">{description}</small>
      </div>
    </React.Fragment>
  );
};

export default LogoInfo;
