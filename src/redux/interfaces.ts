import { ISectionsState } from "./sectionsReducer/sectionsInterfaces";
import { ISectionState } from "./sectionReducer/sectionInterfaces";
import { ICartState } from "./cartReducer/cartInterfaces";

export interface IAppState {
  sections: ISectionsState;
  section: ISectionState;
  cart:ICartState
}

export interface IAction {
  type: string;
  payload?: any;
}
