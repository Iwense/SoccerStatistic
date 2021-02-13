import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import Calendar from "../Calendar";

interface IProps {}

const LeagueCalendar: React.FC<IProps> = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const leagueCode = pathname.split("/").slice(-1).toString();
  const leagueCalendarState = useSelector(
    (state: RootState) => state.leagueCalendar
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.leagueCalendar.getLeagueCalendar(leagueCode);
  }, [leagueCode]);

  console.log("leagueCalendarState = ", leagueCalendarState.leagueCalendar);

  return (
    <Box className={classes.wrapper}>
      <Calendar data={leagueCalendarState.leagueCalendar} />
    </Box>
  );
};

export default LeagueCalendar;
