import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Toolbar,
} from "@material-ui/core";
import { Facebook } from "@material-ui/icons";

import { getPosts } from "./actions/posts";

import Posts from "./components/Posts";
import Form from "./components/Form";

import "./index.css";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <>
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <Toolbar>
          <Facebook />
          <Typography variant="h6" align="center" className={classes.heading}>
            Fakebook
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
              className={classes.mainContainer}
            >
              <Grid item xs={12} sm={12} md={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default App;
