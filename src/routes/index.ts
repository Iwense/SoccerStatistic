const mainRoutes = {
   main: "/",
   league: "/league",
   teams: "/teams",
   leagueCalendar: "/league-calendar/:league",
   teamsCalendar: "/teams-calendar/:team",
 };
 
 const authRoutes = {
 };
 
 export const routes = { ...mainRoutes, ...authRoutes };
 
 const mainLinks = {
   main: () => "/",
   league: () => mainRoutes.league,
   teams: () => mainRoutes.teams,
   leagueCalendar: (league: string) => `/league-calendar/${league}`,
   teamsCalendar: (team: string) => `/teams-calendar/${team}`,
 };
 
 export const links = { ...mainLinks };