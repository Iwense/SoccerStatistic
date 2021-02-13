import React, { useRef, useState } from "react";

import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

import { TextField, Typography } from "@material-ui/core";

interface IProps {
  onChange: (e?: any) => void;
}

const defaultProps: IProps = {
  onChange: () => null,
};

const Search: React.FC<IProps> = (props) => {
  const { onChange } = props;

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <TextField
        className={classes.container}
        onChange={onChange}
        InputProps={{
          classes: {
            root: classes.inputRoot,
            input: classes.input,
          },
          disableUnderline: true,
        }}
        placeholder="Поиск..."
      ></TextField>
    </Box>
  );
};

Search.defaultProps = defaultProps;

export default Search;
