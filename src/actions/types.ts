import { IAction } from "redux";
import { Post } from "types";

export enum ActionTypes {
  FETCH_ALL = "FETCH_ALL",
  CREATE = "CREATE",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  LIKE = "LIKE",
}

interface GetPostAction extends IAction {
  type: ActionTypes.FETCH_ALL;
  payload: Post;
}

interface CreatePostAction extends IAction {
  type: ActionTypes.CREATE;
  payload: Post;
}

interface UpdatePostAction extends IAction {
  type: ActionTypes.UPDATE;
  payload: Post;
}

interface DeletePostAction extends IAction {
  type: ActionTypes.DELETE;
  payload: string;
}

interface LikePostAction extends IAction {
  type: ActionTypes.LIKE;
  payload: Post;
}
export type PostAction =
  | GetPostAction
  | CreatePostAction
  | UpdatePostAction
  | DeletePostAction
  | LikePostAction;
