import { createAction, createReducer } from "@reduxjs/toolkit";

interface State {
}

const initialState: State = {
}


export const test = createAction('app/test')

const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(test, () => {
      console.log('test')
    })
});

export default appReducer