import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

interface IProps {}

const Main: React.FC<IProps> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography>
        {" "}
        Soccer Stat - сайт просмотра статистики ведущих европейских турниров по
        футболу.{" "}
      </Typography>
      <Typography>
        Чтобы найти рассписание команд или лиги выберите (кликнув на нужную) в
        соответствующем списке.
      </Typography>
    </Box>
  );
};

export default Main;
