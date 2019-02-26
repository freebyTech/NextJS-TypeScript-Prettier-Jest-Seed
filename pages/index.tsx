import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";

import { Dashboard } from "../shared/Layout";

const styles = (theme) => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: "none",
  },
});

class Index extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Dashboard>
        <div className={classes.root}>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="h4" gutterBottom>
            Material-UI
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            example project
          </Typography>
          <Typography gutterBottom>
            <Link href="/about">
              <a>Go to the about page</a>
            </Link>
          </Typography>
          <Button variant="contained" color="secondary" onClick={this.handleClick}>
            Super Secret Password
          </Button>
          <div>
            <Button variant="contained" className={classes.button}>
              Default
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              Secondary
            </Button>
            <Button variant="contained" color="secondary" disabled className={classes.button}>
              Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons" className={classes.button}>
              Link
            </Button>
            <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span" className={classes.button}>
                Upload
              </Button>
            </label>
          </div>
        </div>
      </Dashboard>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
