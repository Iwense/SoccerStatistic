import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { links } from "../../../routes";
import { RootState } from "../../../store";
import LeagueItem from "../../molecules/LeagueItem";
import Search from "../../molecules/Search";
import YearMenu from "../../molecules/YearMenu";
import { useStyles } from "./styles";

interface IProps {}

const League: React.FC<IProps> = () => {
  const classes = useStyles();
  const leagueState = useSelector((state: RootState) => state.leagues);
  const history = useHistory();
  const dispatch = useDispatch();
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    dispatch.leagues.getPlayers();
    setDataSearch(leagueState.leagues);
  }, []);

  useEffect(() => {
    setDataSearch(leagueState.leagues);
  }, [leagueState.leagues]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim().toLowerCase();

    if (!searchValue) {
      setDataSearch(leagueState.leagues);
      return;
    }

    const filteredData = leagueState.leagues.filter((value: any) => {
      if (searchValue) {
        return value.name.toLowerCase().indexOf(searchValue) !== -1;
      }
      return null;
    });

    setDataSearch(filteredData);
  };

  const handleYearClick = (year: string) => {
    if (!year) {
      setDataSearch(leagueState.leagues);
      return;
    }

    const filteredData = leagueState.leagues.filter((value: any) => {
      if (year) {
        const startYear = value?.currentSeason?.startDate?.split("-").shift();
        return startYear == year;
      }
      return null;
    });

    setDataSearch(filteredData);
  };

  return (
    <Box className={classes.content}>
      <Box className={classes.box}>
        <Typography className={classes.headerTitle}>Футбольные Лиги</Typography>
        <YearMenu onClick={(e) => handleYearClick(e)} />
      </Box>

      <Search onChange={onSearch} />
      <Box className={classes.wrapper}>
        {dataSearch.map((item: any, index: number) => (
          <LeagueItem
            key={`index-mat-${index}`}
            leagueName={item?.name}
            country={item?.area?.name}
            onClick={(e: any) => {
              e.stopPropagation();
              history.push(links.leagueCalendar(item?.code));
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default League;
