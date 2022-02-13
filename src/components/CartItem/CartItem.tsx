import * as React from "react";
import Plus from "../UI/Plus";
import { ICartItem } from "../../redux/cartReducer/cartInterfaces";

interface IProps {
  item: ICartItem;
  removeItem: (itemId: string) => void;
}

const CartItem: React.FC<IProps> = ({ item, removeItem }) => (
  <div className="cart__item">
    <img className="cart__image" src={item.img} alt="item" />
    <div className='cart__info'>
      <h2>{item.name}</h2>
      <h2>{item.price}</h2>
    </div>
    <span className="cart__delete" onClick={removeItem.bind(null, item.itemId)}>
      <Plus color="#473889" />
    </span>
  </div>
);

export default CartItem;
