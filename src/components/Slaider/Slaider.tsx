import * as React from "react";
import Card from "../Card/Card";
import { IItem } from "../../redux/sectionReducer/sectionInterfaces";

interface IProps {
  favItems: Array<IItem>;
}

const Slaider: React.FC<IProps> = ({ favItems }) => (
  <div className="slaider">
    <h1 className="slaider__title">Best Sellers</h1>
    <div className="slaider__items">
      {favItems.map((item) => (
        <Card key={item.itemId} isAdd={false} item={item} />
      ))}
    </div>
  </div>
);

export default Slaider;
