import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { links } from "../../../routes";

import TeamItem from "../../molecules/TeamItem";
import Search from "../../molecules/Search";
import YearMenu from "../../molecules/YearMenu";

interface IProps {}

const Teams: React.FC<IProps> = () => {
  const classes = useStyles();
  const teamsState = useSelector((state: RootState) => state.teams);
  const history = useHistory();
  const dispatch = useDispatch();
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    dispatch.teams.getTeams();
  }, []);

  useEffect(() => {
    setDataSearch(teamsState.teams);
  }, [teamsState.teams]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.trim().toLowerCase();

    if (!searchValue) {
      setDataSearch(teamsState.teams);
      return;
    }

    const filteredData = teamsState.teams.filter((value: any) => {
      if (searchValue) {
        return value.name.toLowerCase().indexOf(searchValue) !== -1;
      }
      return null;
    });

    setDataSearch(filteredData);
  };

  const handleYearClick = (year: string) => {
    if (!year) {
      setDataSearch(teamsState.teams);
      return;
    }

    const filteredData = teamsState.teams.filter((value: any) => {
      if (year) {
        const startYear = value?.lastUpdated?.split("-").shift();
        return startYear == year;
      }
      return null;
    });

    setDataSearch(filteredData);
  };

  return (
    <Box className={classes.content}>
      <Box className={classes.box}>
        <Typography className={classes.headerTitle}>Список Команд</Typography>
        <YearMenu onClick={(e) => handleYearClick(e)} />
      </Box>

      <Search onChange={onSearch} />
      <Box className={classes.wrapper}>
        {dataSearch.map((item: any, index: number) => (
          <TeamItem
            key={`index-mat-${index}`}
            name={item?.name}
            country={item?.area?.name}
            founded={item?.founded}
            logo={item?.crestUrl}
            onClick={(e: any) => {
              e.stopPropagation();
              history.push(links.teamsCalendar(item?.id));
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Teams;
