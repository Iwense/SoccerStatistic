import React from "react";
import cn from "classnames";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export interface IProps {
  name?: string;
  country?: string;
  className?: string;
  logo?: string;
  founded?: string;
  onClick?: (e?: any) => void;
}

const defaultProps: IProps = {
  name: "",
  onClick: () => null,
};

export const TeamItem: React.FC<IProps> = (props) => {
  const { name, className, onClick, country, logo, founded } = props;

  const classes = useStyles(props);
  const boxClass = cn(className, classes.wrapper);

  return (
    <Box className={boxClass} onClick={onClick}>
      <Box className={classes.title}>
        <img className={classes.logo} src={logo} alt={`Logo - ${name}`} />{" "}
        <Typography className={classes.name}>{name}</Typography>
      </Box>

      <Typography className={classes.contry}>Contry:{country}</Typography>
      <Typography className={classes.contry}>Founded:{founded}</Typography>
    </Box>
  );
};

TeamItem.defaultProps = defaultProps;
export default TeamItem;
