import { FC, useState, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { AppState } from "types";

import { TextField, Button, Typography, Paper } from "@material-ui/core";
// @ts-ignore
import FileBase from "react-file-base64";

import useStyles from "./styles";
import { Post } from "types";

type Props = {
  currentId: null | string;
  setCurrentId: (id: null | string) => void;
};

const Form: FC<Props> = ({ currentId, setCurrentId }) => {
  const defaultState = {
    title: "",
    creator: "",
    message: "",
    tags: [],
    selectedFile: "",
    likeCount: 0,
  };

  const post = useSelector((state: AppState) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  const [postData, setPostData] = useState<Post>(defaultState);

  const [error, setError] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, creator, message, tags, selectedFile } = postData;
    if (title && creator && message && tags && selectedFile) {
      if (currentId) {
        dispatch(updatePost(currentId, postData));
      } else {
        dispatch(createPost(postData));
      }
      clear();
    } else {
      setError("All fields are required");
    }
  };

  const clear = () => {
    setError("");
    setCurrentId(null);
    setPostData(defaultState);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Create"} Post
        </Typography>
        {error && (
          <div className={classes.error}>
            <Typography variant="body2">{error}</Typography>
          </div>
        )}
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }: { base64: string }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
