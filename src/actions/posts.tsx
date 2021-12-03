import * as api from "../api";
import { Post } from "types";
import { IDispatch } from "redux";
import { ActionTypes } from "./types";

// Action creators
export const getPosts = () => async (dispatch: IDispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({
      type: ActionTypes.FETCH_ALL,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post: Post) => async (dispatch: IDispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({
      type: ActionTypes.CREATE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost =
  (id: string, post: Post) => async (dispatch: IDispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      dispatch({
        type: ActionTypes.UPDATE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deletePost = (id: string) => async (dispatch: IDispatch) => {
  try {
    await api.deletePost(id);
    dispatch({
      type: ActionTypes.DELETE,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id: string) => async (dispatch: IDispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: ActionTypes.LIKE,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
