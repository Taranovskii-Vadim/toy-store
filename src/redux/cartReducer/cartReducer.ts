import { IAction } from "../interfaces";
import {
  ICartState,
  ICartHandlers,
  IAddItemAction,
  IGetItemAction,
  IDeleteItemAction,
  IPayItems,
} from "./cartInterfaces";
import { IItem } from "../sectionReducer/sectionInterfaces";

export const ADD_ITEM = "cartReducer/ADD_ITEM";
export const GET_ITEM = "cartReducer/GET_ITEM";
export const DELETE_ITEM = "cartReducer/DELETE_ITEM";
export const PAY_ITEMS = "cartReducer/PAY_ITEMS";

const handlers: ICartHandlers = {
  [GET_ITEM]: (state: ICartState, { payload }) => ({
    finalPrice: payload.final,
    cart: [...payload.result],
  }),
  [ADD_ITEM]: (state: ICartState, { payload }) => ({
    ...state,

    cart: [...state.cart, payload],
  }),
  [DELETE_ITEM]: (state: ICartState, { payload }) => ({
    cart: state.cart.filter((item) => item.itemId !== payload),
    finalPrice:
      state.finalPrice -
      state.cart.find((item) => item.itemId === payload)?.price!,
  }),
  [PAY_ITEMS]: () => ({ cart: [], finalPrice: 0 }),
  DEFAULT: (state: ICartState) => state,
};

const initialState: ICartState = {
  cart: [],
  finalPrice: 0,
};

export default function cartReducer(state = initialState, action: IAction) {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}

export const addItem = (item: IItem): IAddItemAction => {
  const data = {
    itemId: item.itemId,
    name: item.name,
    price: item.price,
    img: item.image,
  };
  localStorage.setItem(item.itemId, JSON.stringify(data));
  alert("Добавлено!");
  return { type: ADD_ITEM, payload: data };
};

export const receiveItems = (): IGetItemAction => {
  const result = [];
  let price = 0;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item = JSON.parse(localStorage.getItem(key!)!);
    price += item.price;
    result.push(item);
  }
  return { type: GET_ITEM, payload: { result, final: price } };
};

export const deleteItem = (itemId: string): IDeleteItemAction => {
  localStorage.removeItem(itemId);
  return { type: DELETE_ITEM, payload: itemId };
};

export const payItems = (): IPayItems => {
  localStorage.clear();
  return { type: PAY_ITEMS };
};
