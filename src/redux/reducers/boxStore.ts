import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";
import {Action, AnyAction} from "redux";

interface stateInterface {
  allIds: Array<number>,
  byIds: any,
}

const initialState:stateInterface = {
  allIds: [],
  byIds: {}
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
