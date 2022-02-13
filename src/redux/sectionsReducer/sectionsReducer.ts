import { IAction } from "../interfaces";
import {
  ISectionsHandlers,
  ISectionsState,
  IGetSectionsAction,
  ISetFamousAction,
} from "./sectionsInterfaces";
import { axiosConfig } from "../axiosConfig";
import { Dispatch } from "react";
import { ISection, IItem } from "../sectionReducer/sectionInterfaces";

export const GET_SECTIONS = "sectionsReducer/GET_SECTIONS";
export const SET_FAMOUS = "sectionsReducer/SET_FAMOUS";

const handlers: ISectionsHandlers = {
  [GET_SECTIONS]: (state: ISectionsState, { payload }) => ({
    ...state,
    sections: [...payload],
  }),
  [SET_FAMOUS]: (state: ISectionsState, { payload }) => ({
    ...state,
    famousItems: [...payload],
  }),
  DEFAULT: (state: ISectionsState) => state,
};

const initialState: ISectionsState = {
  sections: [],
  famousItems: [],
};

const sortAllItems = (items: Array<IItem>) => {
  const result = items.sort((a, b) => {
    if (a.raiting > b.raiting) {
      return 1;
    }
    if (a.raiting < b.raiting) {
      return -1;
    }
    return 0;
  });
  console.log(result.reverse());
  return [result[0], result[1], result[2]].reverse();
};

const setFamous = (sections: Array<ISection>) => {
  const allItems: Array<IItem> = [];
  for (let section of sections) {
    section.stuff?.forEach((item) => allItems.push(item));
  }
  return sortAllItems(allItems);
};

export default function sectionsReducer(
  state: ISectionsState = initialState,
  action: IAction
) {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}

export const receiveSections = () => {
  return async (dispatch: Dispatch<IGetSectionsAction | ISetFamousAction>) => {
    const response = await axiosConfig.get(`/sections.json`);
    const payload = Object.keys(response.data).map((key) => ({
      sectionId: key,
      ...response.data[key],
    }));
    dispatch({ type: SET_FAMOUS, payload: setFamous(payload).reverse() });
    dispatch({ type: GET_SECTIONS, payload });
  };
};
