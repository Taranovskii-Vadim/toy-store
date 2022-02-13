import { IAction } from "../interfaces";
import { ISection, IItem } from "../sectionReducer/sectionInterfaces";
import { GET_SECTIONS, SET_FAMOUS } from "./sectionsReducer";

export interface ISectionsState {
  sections: Array<ISection>;
  famousItems:Array<IItem>
}

export interface ISectionsHandlers {
  [key: string]: (state: ISectionsState, action: IAction) => ISectionsState;
}

export interface IGetSectionsAction {
  type: typeof GET_SECTIONS;
  payload: Array<ISection>;
}

export interface ISetFamousAction {
  type: typeof SET_FAMOUS;
  payload: Array<IItem>;
}