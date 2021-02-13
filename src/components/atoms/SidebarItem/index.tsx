import React from "react";
import cn from "classnames";

import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  title?: string;
  className?: string;
  active?: boolean;
  onClick?: (e?: any) => void;
}

const defaultProps: IProps = {
  title: "",
  active: false,
  onClick: () => null,
};

const SidebarItem: React.FC<IProps> = (props: IProps) => {
  const { title, className, active, onClick } = props;
  const classes = useStyles();

  const textClass = cn(classes.title, className, {
    [classes.active]: active,
  });

  return (
    <Box className={classes.wrapper} onClick={onClick}>
      <Typography className={textClass}>{title}</Typography>
    </Box>
  );
};

SidebarItem.defaultProps = defaultProps;
export default SidebarItem;
