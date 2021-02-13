import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import LeftArrow from "../../../assets/images/left.png";
import RightArrow from "../../../assets/images/right.png";
import * as dateFns from "date-fns";

import cn from "classnames";
import { useHistory } from "react-router-dom";
import { links } from "../../../routes";

interface IProps {
  data: any[];
}

const Calendar: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { data } = props;
  const today = new Date();
  const history = useHistory();

  const [currentMonth, setCurrentMonth] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);

  const nextMonth = () => {
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
  };

  const RenderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <Box className={cn(classes.header)}>
        <Box className={cn(classes.col, classes.colStart)}>
          <Box className={classes.icon} onClick={prevMonth}>
            <img src={LeftArrow} alt="Left Arrow" />
          </Box>
        </Box>
        <Box className={cn(classes.col, classes.colCenter)}>
          <Typography className={classes.currentMonth}>
            {dateFns.format(currentMonth, dateFormat)}
          </Typography>
        </Box>
        <Box className={cn(classes.col, classes.colEnd)} onClick={nextMonth}>
          <Box className={cn(classes.icon, classes.iconLeft)}>
            {" "}
            <img src={RightArrow} alt="Right Arrow" />
          </Box>
        </Box>
      </Box>
    );
  };

  const RenderCells = () => {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <Box
            key={`match-${i}-${Math.random()}}`}
            className={cn(
              classes.col,
              classes.cell,
              !dateFns.isSameMonth(day, monthStart)
                ? classes.disabled
                : dateFns.isSameDay(day, selectedDate)
                ? classes.selected
                : ""
            )}
            onClick={() => onDateClick(dateFns.toDate(cloneDay))}
          >
            {Boolean(data.length) &&
              data.map((item: any, index: number) => {
                const matchDay = new Date(item.utcDate);
                if (dateFns.isSameDay(matchDay, cloneDay)) {
                  return (
                    <Box
                      key={`match-${index}-${new Date()}`}
                      className={classes.matchesDayWrapper}
                    >
                      <Typography>{item?.homeTeam?.name}</Typography>
                      <Typography>{item?.awayTeam?.name}</Typography>

                      {item?.score?.fullTime?.homeTeam !== null && (
                        <Typography className={classes.competition}>
                          {item?.score?.fullTime?.homeTeam} :{" "}
                          {item?.score?.fullTime?.awayTeam}
                        </Typography>
                      )}

                      <Typography className={classes.competition}>
                        {item?.competition?.name}
                      </Typography>
                    </Box>
                  );
                } else {
                  return null;
                }
              })}
            <span className={classes.number}>{formattedDate}</span>
            <span className={classes.bg}>{formattedDate}</span>
          </Box>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <Box
          key={`match-${Math.random()}-${Math.random()}}`}
          className={classes.row}
        >
          {days}
        </Box>
      );
      days = [];
    }
    return (
      <Box
        key={`match-${Math.random()}-${Math.random()}}`}
        className={classes.body}
      >
        {rows}
      </Box>
    );
  };

  const onDateClick = (day: Date) => setSelectedDate(day);

  const RenderDays = () => {
    const dateFormat = "iiii";
    const days = [];
    let startDate = dateFns.startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <Box className={cn(classes.col, classes.colCenter)} key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </Box>
      );
    }
    return <Box className={cn(classes.days, classes.row)}>{days}</Box>;
  };

  return (
    <Box className={classes.content}>
      <Typography className={classes.headerTitle}>Рассписание</Typography>
      {data && (
        <Box className={classes.calendar}>
          <RenderHeader />
          <RenderDays />
          <RenderCells />
        </Box>
      )}

      {!data && (
        <Box className={classes.noCalendar}>
          <Typography> К сожалению, по данной лиги рассписания нет.</Typography>
          <Typography> Может быть вы искали </Typography>
          <Typography
            className={classes.link}
            onClick={(e: any) => {
              e.stopPropagation();
              history.push(links.leagueCalendar("CL"));
            }}
          >
            Лигу Чемпионов?
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Calendar;
