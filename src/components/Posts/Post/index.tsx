import { FC } from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { Post as PostTypes } from "types";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import useStyles from "./styles";

type Props = {
  post: PostTypes;
  setCurrentId: (id: string) => void;
};

const Post: FC<Props> = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = () => {
    dispatch(deletePost(post._id!));
  };

  const handleLikePost = () => {
    dispatch(likePost(post._id!));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id!)}
        >
          <EditIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag.trim()} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" component="p" color="textSecondary">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={handleLikePost}>
          <ThumbAltIcon fontSize="small" />
          Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
