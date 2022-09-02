import { createAction, createReducer, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "../store";

export interface SampleState {
  items: [];
  count: number
}

const initialState: SampleState = {
  items: [],
  count: 0
}

export const fetchData = createAction<SampleState>('sample/fetch')

const sampleReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchData, (state, action: PayloadAction<SampleState>) => {
      state.items = action.payload.items;
      state.count = action.payload.count;
    })
});

export const items = (state: AppState) => state.sample.items
export const count = (state: AppState) => state.sample.count

export default sampleReducer