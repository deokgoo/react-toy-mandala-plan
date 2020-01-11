import { selectInterface } from "./reducer/type";

export const selectBox:(state: any)=>any = (state: selectInterface) => {state.boxNum, state.row, state.col};