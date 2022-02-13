import * as React from "react";
import Slaider from "../../components/Slaider/Slaider";
import Navbar from "../../components/Navbar/Navbar";
import { connect } from "react-redux";
import { IAppState } from "../../redux/interfaces";
import { ISection, IItem } from "../../redux/sectionReducer/sectionInterfaces";
import { receiveSections } from "../../redux/sectionsReducer/sectionsReducer";

interface IProps {
  sectinos: Array<ISection>;
  famous: Array<IItem>;
  getSections: () => void;
}

const StartPage: React.FC<IProps> = ({ sectinos, getSections, famous }) => {
  React.useEffect(() => {
    getSections();
  }, []);
  return (
    <div className="startPage">
      <Slaider favItems={famous} />
      <Navbar sections={sectinos} />
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  sectinos: state.sections.sections,
  famous: state.sections.famousItems,
});

const mapDispatchToProps = (dispatch: any) => ({
  getSections: () => dispatch(receiveSections()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPage);
