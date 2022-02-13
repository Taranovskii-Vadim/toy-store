import { combineReducers } from "redux";
import { IAppState } from "./interfaces";
import sectionsReducer from "./sectionsReducer/sectionsReducer";
import sectionReducer from "./sectionReducer/sectionReducer";
import cartReducer from "./cartReducer/cartReducer";

export const rootReducer = combineReducers<IAppState>({
  sections: sectionsReducer,
  section: sectionReducer,
  cart:cartReducer,
});
