import {
  FILTER_STUFF,
  GET_SECTION,
  SET_LOADING,
  SEARCH_ITEMS,
} from "./sectionReducer";
import { IAction } from "../interfaces";

export interface ISectionState {
  section: ISection;
  isLoading: boolean;
  types: Array<string>;
}

export interface ISectionHandlers {
  [name: string]: (state: ISectionState, action: IAction) => ISectionState;
}

export interface ISection {
  readonly sectionId: string;
  name: string;
  description: string;
  icon: string;
  stuff?: Array<IItem>;
}

export interface IItem {
  readonly itemId: string;
  type: string;
  name: string;
  image: string;
  price: number;
  raiting: number;
}

export interface IGetSectionAction {
  type: typeof GET_SECTION;
  payload: { section: ISection; types: Array<string> };
}

export interface ISetLoadingAction {
  type: typeof SET_LOADING;
}

export interface IFilterAction {
  type: typeof FILTER_STUFF;
  payload: Array<IItem>;
}

export interface ISearchAction {
  type: typeof SEARCH_ITEMS;
  payload: Array<IItem>;
}
