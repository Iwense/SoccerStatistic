import React, { ReactChild } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { useStyles } from "./styles";

interface IProps {
  sideBarLeft: ReactChild;
  children: ReactChild;
}

const MainLayout: React.FC<IProps> = (props) => {
  const { sideBarLeft, children } = props;

  const classes = useStyles();
  return (
    <Grid container component={"div"} className={classes.mainWrapper}>
      <Grid container component={"div"} className={classes.contentContainer}>
        <Grid item className={classes.sideBarLeft} component={"div"}>
          {sideBarLeft}
        </Grid>
        <Grid item className={classes.content} component={"div"}>
          <Box className={classes.contentWrapper}>
            <Box>{children}</Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainLayout;
