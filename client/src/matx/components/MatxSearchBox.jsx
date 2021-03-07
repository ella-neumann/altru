import React, { Component, useState } from "react";
import { Icon, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    "&::placeholder": {
      color: theme.palette.primary.contrastText,
    },
  },
});

function MatxSearchBox(props) {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    window.location.href = "/search/searchbar";
  };

  const [searchTerm, setSearchTerm] = useState('');

  let classes = props;
  return (
    <React.Fragment>
      {!open && (
        <IconButton onClick={toggle}>
          <Icon>search</Icon>
        </IconButton>
      )}

      {open && (
        <div
          className={`flex items-center h-full matx-search-box ${classes.root}`}
        >
          <input
            className={`px-4 search-box w-full ${classes.root}`}
            type="text"
            placeholder="Search for nonprofits..."
            onChange = {event => {setSearchTerm(event.target.value)}}
            autoFocus
          />
          <IconButton onClick={toggle} className="align-middle mx-4">
            <Icon>close</Icon>
          </IconButton>
        </div>
      )}
    </React.Fragment>
  );
}

export default withStyles(styles, { withTheme: true })(MatxSearchBox);
