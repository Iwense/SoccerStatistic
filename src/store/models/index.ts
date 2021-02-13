import { teams } from './teams';
import { leagues } from './leagues';
import { Models } from '@rematch/core'
import { sidebarList } from './sidebarList';
import { teamCalendar } from './teamCalendar';
import { leagueCalendar } from './leagueCalendar';

export interface RootModel extends Models<RootModel> {
   sidebarList: typeof sidebarList;
   leagues: typeof leagues;
   teams: typeof teams;
   teamCalendar: typeof teamCalendar;
   leagueCalendar: typeof leagueCalendar;
}

export const models: RootModel = { 
   sidebarList,
   leagues,
   teams,
   teamCalendar,
   leagueCalendar,
 }