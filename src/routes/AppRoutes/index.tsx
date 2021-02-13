import React from "react";

import { Switch, Route } from "react-router-dom";
import SideBarLeft from "../../components/organisms/SideBarLeft";
import { routes } from "../index";

import MainPage from "../../pages/MainPage";
import MainLayout from "../../layouts/MainLayout/index.";
import LeaguePage from "../../pages/LeaguePage";
import LeagueCalendarPage from "../../pages/LeagueCalendarPage";
import TeamsPage from "../../pages/TeamsPage";
import TeamsCalendarPage from "../../pages/TeamsCalendarPage";

const AppRoutes = () => (
  <MainLayout sideBarLeft={<SideBarLeft />}>
    <Switch>
      <Route component={MainPage} exact path={routes.main} />
      <Route component={LeaguePage} exact path={routes.league} />
      <Route
        component={LeagueCalendarPage}
        exact
        path={routes.leagueCalendar}
      />
      <Route component={TeamsPage} exact path={routes.teams} />
      <Route component={TeamsCalendarPage} exact path={routes.teamsCalendar} />
    </Switch>
  </MainLayout>
);

export default AppRoutes;
