import { createModel } from "@rematch/core";
import { RootModel } from ".";


export const leagueCalendar = createModel<RootModel>()({
  state: {
	leagueCalendar: [],
  },
  reducers: {
    SET_LEAGUES_CALENDAR: (state: any, leagueCalendar: any[]) => {
			return {
				...state,
				leagueCalendar,
			}
		},
  },
  effects: (dispatch) => {
    const { leagueCalendar } = dispatch
		return {
			async getLeagueCalendar(code:string): Promise<any> {
				let response = await fetch(`https://api.football-data.org/v2/competitions/${code}/matches`, {
					headers: {
						"X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
					},
    				method: "GET",
				})
				let {matches} : {matches: any[]} = await response.json()
				leagueCalendar.SET_LEAGUES_CALENDAR(matches)
			},
		}
  },
});


