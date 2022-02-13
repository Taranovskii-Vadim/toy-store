import * as React from "react";
import { ISection } from "../../redux/sectionReducer/sectionInterfaces";
import NavbarLink from "../NavbarLink/NavbarLink";

interface IProps {
  sections: Array<ISection>;
}

const Navbar: React.FC<IProps> = ({ sections }) => {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">Разделы:</h2>
      <ul className="sections">
        {sections.map((section) => (
          <NavbarLink key={section.sectionId} section={section} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
