import { IAction } from "../interfaces";
import { ADD_ITEM, GET_ITEM, DELETE_ITEM, PAY_ITEMS } from "./cartReducer";

export interface ICartHandlers {
  [name: string]: (state: ICartState, action: IAction) => ICartState;
}

export interface ICartItem {
  itemId: string;
  name: string;
  price: number;
  img: string;
}

export interface ICartState {
  cart: Array<ICartItem>;
  finalPrice: number;
}

export interface IAddItemAction {
  type: typeof ADD_ITEM;
  payload: ICartItem;
}

export interface IGetItemAction {
  type: typeof GET_ITEM;
  payload: {
    result: Array<ICartItem>;
    final: number;
  };
}

export interface IDeleteItemAction {
  type: typeof DELETE_ITEM;
  payload: string;
}

export interface IPayItems{
  type: typeof PAY_ITEMS;
}
