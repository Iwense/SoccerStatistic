import React from "react";
import cn from "classnames";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

export interface IProps {
  leagueName?: string;
  country?: string;
  className?: string;
  onClick?: (e?: any) => void;
}

const defaultProps: IProps = {
  leagueName: "",
  onClick: () => null,
};

export const LeagueItem: React.FC<IProps> = (props) => {
  const { leagueName, className, onClick, country } = props;

  const classes = useStyles(props);
  const boxClass = cn(className, classes.wrapper);

  return (
    <Box className={boxClass} onClick={onClick}>
      <Typography className={classes.leagueName}>{leagueName}</Typography>
      <Typography className={classes.contry}>{country}</Typography>
    </Box>
  );
};

LeagueItem.defaultProps = defaultProps;
export default LeagueItem;
