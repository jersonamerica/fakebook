import * as Redux from "redux";

/// <reference types="react-scripts" />

declare module "react-file-base64";
declare module "redux" {
  export interface IDispatch<A extends Redux.Action = Redux.AnyAction> {
    <T extends A>(action: T): T;
    <R>(asyncAction: IThunkAction<R, any>): R;
  }

  type IAction = Redux.Action;

  type IThunkAction<R, S> = (
    dispatch: IDispatch<Redux.Action>,
    getState: () => S
  ) => R;

  type IStore<S> = Redux.Store<S> & { dispatch: IDispatch<Redux.Action> };
}
