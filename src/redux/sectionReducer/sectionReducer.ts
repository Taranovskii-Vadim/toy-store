import { Dispatch } from "react";
import { axiosConfig } from "../axiosConfig";
import {
  IFilterAction,
  ISectionState,
  IGetSectionAction,
  ISectionHandlers,
  ISetLoadingAction,
  IItem,
  ISearchAction,
} from "./sectionInterfaces";
import { IAction } from "../interfaces";

export const FILTER_STUFF = "sectionReducer/FILTER_STUFF";
export const GET_SECTION = "sectionReducer/GET_SECTION";
export const SET_LOADING = "sectionReducer/SET_LOADING";
export const SEARCH_ITEMS = "sectionReducer/SEARCH_ITEMS";

const handlers: ISectionHandlers = {
  [FILTER_STUFF]: (state: ISectionState, { payload }) => ({
    ...state,
    section: {
      ...state.section,
      stuff: [...payload],
    },
  }),
  [GET_SECTION]: (state: ISectionState, { payload }) => ({
    ...state,
    section: { ...payload.section },
    types: [...payload.types],
  }),
  [SET_LOADING]: (state: ISectionState) => ({
    ...state,
    isLoading: !state.isLoading,
  }),
  [SEARCH_ITEMS]: (state: ISectionState, { payload }) => ({
    ...state,
    section: {
      ...state.section,
      stuff: [...payload],
    },
  }),
  DEFAULT: (state) => state,
};

const initialState: ISectionState = {
  section: {
    sectionId: "",
    name: "",
    description: "",
    icon: "",
    stuff: [],
  },
  isLoading: false,
  types: [],
};

const getAllTypes = (stuff: Array<IItem>) => {
  const types = stuff.map((item) => item.type);
  return Array.from(new Set(types));
};

export default function sectionReducer(
  state: ISectionState = initialState,
  action: IAction
) {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
}

export const receiveSection = (sectionId: string) => {
  return async (dispatch: Dispatch<IGetSectionAction | ISetLoadingAction>) => {
    dispatch({ type: SET_LOADING });
    const response = await axiosConfig.get(`/sections/${sectionId}.json`);
    const types = getAllTypes(response.data.stuff);
    const payload = { section: { sectionId, ...response.data }, types };
    dispatch({ type: GET_SECTION, payload });
    dispatch({ type: SET_LOADING });
  };
};

export const filterItems = (sectionId: string, filter: string | undefined) => {
  return async (dispatch: Dispatch<IFilterAction | ISetLoadingAction>) => {
    dispatch({ type: SET_LOADING });
    const response = await axiosConfig.get(`/sections/${sectionId}/stuff.json`);
    let payload = [...response.data];
    if (filter) {
      payload = response.data.filter((item: any) => item.type === filter);
    }
    dispatch({ type: FILTER_STUFF, payload });
    dispatch({ type: SET_LOADING });
  };
};

export const searchItems = (sectionId: string, name: string) => {
  return async (dispatch: Dispatch<ISearchAction | ISetLoadingAction>) => {
    dispatch({ type: SET_LOADING });
    const response = await axiosConfig.get(`/sections/${sectionId}/stuff.json`);
    const payload = response.data.filter((item: IItem) =>
      item.name.includes(name)
    );
    dispatch({ type: SEARCH_ITEMS, payload });
    dispatch({ type: SET_LOADING });
  };
};
