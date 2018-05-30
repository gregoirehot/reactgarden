import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

const NewTodoForm = props => {
  const { classes } = props;
  return (
    <form className={classes.container} onSubmit={props.formSubmitted}>
      <TextField
        id="newTodo"
        label="newTodo"
        className={classes.textField}
        value={props.newTodo}
        onChange={(e) => props.newTodoChanged(e.target.value)}
        margin="normal"
      />
      <Button variant="raised" color="primary" className={classes.button} type="submit">Add Todo</Button>
    </form>
  )
};

NewTodoForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewTodoForm);
