import React from "react";
import Post from "./Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  return (
    <div>
      <Post />
    </div>
  );
};

export default Posts;
