import { Post } from "types";
import { PostAction } from "actions/types";

const reducer = (posts: null | Array<Post> = null, action: PostAction) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "UPDATE":
    case "LIKE":
      return posts?.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "CREATE":
      return posts ? [...posts!, action.payload] : action.payload;
    case "DELETE":
      return posts?.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};

export default reducer;
