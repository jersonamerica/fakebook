import { FC } from "react";
import { useSelector } from "react-redux";

import { Grid, CircularProgress, Typography } from "@material-ui/core";

import Post from "./Post";
import useStyles from "./styles";
import { AppState } from "types";

type Props = {
  setCurrentId: (id: string) => void;
};

const Posts: FC<Props> = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state: AppState) => state.posts);

  if (!Array.isArray(posts)) return <CircularProgress />;

  return posts.length ? (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="h5" style={{ color: "#fafafa" }}>
      There are no posts yet
    </Typography>
  );
};

export default Posts;
