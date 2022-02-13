import * as React from "react";
import { NavLink } from "react-router-dom";
import { ISection } from "../../redux/sectionReducer/sectionInterfaces";
import LogoInfo from "../LogoInfo/LogoInfo";

interface IProps {
  section: ISection;
}

const NavbarLink: React.FC<IProps> = ({ section }) => (
  <NavLink key={section.sectionId} to={`/sections${section.sectionId}`}>
    <li className="section">
      <LogoInfo
        icon={section.icon}
        name={section.name}
        description={section.description}
      />
    </li>
  </NavLink>
);

export default NavbarLink;
