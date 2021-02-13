import React from "react";
import SidebatListItems from "../../molecules/SidebarListItems";

import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import Logo from "../../../assets/images/Logo.png";

interface IProps {}

const SideBarLeft: React.FC<IProps> = () => {
  const classes = useStyles();
  const data = useSelector((state: RootState) => state.sidebarList.list);

  return (
    <Box className={classes.wrapper}>
      <SidebatListItems data={data} />
      <Box className={classes.imageBox}>
        <img className={classes.image} src={Logo} alt="Logotip" />
      </Box>
    </Box>
  );
};

export default SideBarLeft;
