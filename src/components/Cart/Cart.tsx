import * as React from "react";
import { createPortal } from "react-dom";
import CloseBtn from "../UI/CloseBtn/CloseBtn";
import CartItem from "../CartItem/CartItem";
import { connect } from "react-redux";
import { IAppState } from "../../redux/interfaces";
import { ICartItem } from "../../redux/cartReducer/cartInterfaces";
import {
  receiveItems,
  deleteItem,
  payItems,
} from "../../redux/cartReducer/cartReducer";
import EmptyCart from "../EmptyCart/EmptyCart";

interface IProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  getItems: () => void;
  removeItem: (itemId: string) => void;
  payStuff: () => void;
  cart: Array<ICartItem>;
  final: number;
}

class Cart extends React.Component<IProps> {
  root!: HTMLElement;
  componentWillMount() {
    this.root = document.createElement("div");
    this.root.classList.add("overlay");
    document.body.append(this.root);
  }

  componentWillUnmount() {
    document.body.removeChild(this.root);
  }

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    return createPortal(
      <div className="cart">
        <div className="cart__block cart__header">
          <h2 className="cart__title">Корзина</h2>
          <CloseBtn
            clickHandler={this.props.setIsModalOpen.bind(null, false)}
          />
        </div>
        <div className="cart__main">
          {this.props.cart.length ? (
            this.props.cart.map((item) => (
              <CartItem
                key={item.itemId}
                item={item}
                removeItem={this.props.removeItem}
              />
            ))
          ) : (
            <EmptyCart />
          )}
        </div>
        <div className="cart__block">
          <span className="cart__final">{this.props.final}P</span>
          <button onClick={this.props.payStuff} className="cart__done">
            Оплатить
          </button>
        </div>
      </div>,
      this.root
    );
  }
}

const mapStateToProps = (state: IAppState) => ({
  cart: state.cart.cart,
  final: state.cart.finalPrice,
});

const mapDispatchToProps = (dispatch: any) => ({
  getItems: () => dispatch(receiveItems()),
  removeItem: (itemId: string) => dispatch(deleteItem(itemId)),
  payStuff: () => dispatch(payItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
