import * as React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../redux/interfaces";
import { ISection, IItem } from "../../redux/sectionReducer/sectionInterfaces";
import Card from "../../components/Card/Card";
import Filterbar from "../../components/Filterbar/Filterbar";
import {
  filterItems,
  receiveSection,
  searchItems,
} from "../../redux/sectionReducer/sectionReducer";
import { useParams } from "react-router-dom";
import LogoInfo from "../../components/LogoInfo/LogoInfo";
import Loader from "../../components/UI/Loader/Loader";
import { addItem } from "../../redux/cartReducer/cartReducer";
import NoFound from "../../components/NoFound/NoFound";

interface IProps {
  section: ISection;
  types: Array<string>;
  match: any;
  isLoading: boolean;
  filterStuff: (sectionId: string, filter: string | undefined) => void;
  getSection: (sectionId: string) => void;
  addStuff: (item: IItem) => void;
  findItem: (sectionId: string, name: string) => void;
}

interface IParams {
  sectionId: string;
}

const MainPage: React.FC<IProps> = (props) => {
  const params = useParams<IParams>();
  const sectionId = params.sectionId;
  React.useEffect(() => {
    props.getSection(sectionId);
  }, [sectionId]);

  return (
    <div className="mainPage">
      <div className="mainPage__header">
        <LogoInfo
          icon={props.section.icon}
          name={props.section.name}
          description={props.section.description}
        />
      </div>
      <Filterbar
        types={props.types}
        sectionId={props.section.sectionId}
        filterStuff={props.filterStuff}
        findItem={props.findItem}
      />
      <div className="items">
        {props.isLoading ? (
          <Loader />
        ) : props.section.stuff?.length ? (
          props.section.stuff?.map((item) => (
            <Card
              key={item.itemId}
              isAdd={true}
              addStuff={props.addStuff}
              item={item}
            />
          ))
        ) : (
          <NoFound />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  section: state.section.section,
  isLoading: state.section.isLoading,
  types: state.section.types,
});

const mapDispatchToProps = (dispatch: any) => ({
  filterStuff: (sectionId: string, filter: string | undefined) =>
    dispatch(filterItems(sectionId, filter)),
  getSection: (sectionId: string) => dispatch(receiveSection(sectionId)),
  findItem: (sectionId: string, name: string) =>
    dispatch(searchItems(sectionId, name)),
  addStuff: (item: IItem) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
