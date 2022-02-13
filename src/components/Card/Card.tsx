import * as React from "react";
import Plus from "../UI/Plus";
import { IItem } from "../../redux/sectionReducer/sectionInterfaces";

interface IProps {
  item: IItem;
  isAdd: boolean;
  addStuff?: (item: IItem) => void;
}

const Card: React.FC<IProps> = ({ item, addStuff, isAdd }) => (
  <div className='card'>
    <img src={item.image} alt='pic' />
    <div className='card__footer'>
      <h4 className='card__title'>{item.name}</h4>
      <small className='card__description'>{item.type}</small>
      <div className='card__priceBlock'>
        <span className='card__price'>{item.price} P</span>
        {isAdd && (
          <button className='card__add' onClick={addStuff!.bind(null, item)}>
            <Plus />
          </button>
        )}
      </div>
    </div>
  </div>
);

export default Card;
