import { createStore as reduxCreateStore } from "redux"

const initialState = { spanishEnabled: false }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `TOGGLE_LANGUAGE`:
      return { ...state, spanishEnabled: !state.spanishEnabled }

    default:
      return state;
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
