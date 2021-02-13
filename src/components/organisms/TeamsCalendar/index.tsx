import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import Calendar from "../Calendar";

interface IProps {}

const TeamsCalendar: React.FC<IProps> = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const teamID = pathname.split("/").slice(-1).toString();
  const teamCalendarState = useSelector(
    (state: RootState) => state.teamCalendar
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.teamCalendar.getTeamCalendar(teamID);
  }, []);

  console.log("teamCalendarState = ", teamCalendarState.teamCalendar);

  return (
    <Box className={classes.wrapper}>
      <Calendar data={teamCalendarState.teamCalendar} />
    </Box>
  );
};

export default TeamsCalendar;
