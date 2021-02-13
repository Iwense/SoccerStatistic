import { createModel } from "@rematch/core";
import { RootModel } from ".";

export const teamCalendar = createModel<RootModel>()({
  state: {
	teamCalendar: [],
  },
  reducers: {
    SET_TEAMS_CALENDAR: (state: any, teamCalendar: any[]) => {
			return {
				...state,
				teamCalendar,
			}
		},
  },
  effects: (dispatch) => {
    const { teamCalendar } = dispatch
		return {
			async getTeamCalendar(id:number): Promise<any> {
				let response = await fetch(`https://api.football-data.org/v2/teams/${id}/matches?status=SCHEDULED`, {
					headers: {
						"X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
					},
    				method: "GET",
				})
				let {matches} : {matches: any[]} = await response.json()

				let responsePast = await fetch(`https://api.football-data.org/v2/teams/${id}/matches?status=FINISHED`, {
					headers: {
						"X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
					},
    				method: "GET",
				})
				let {matches : matchesPast } : {matches: any[]} = await responsePast.json()
				const allMatches = matchesPast.concat(matches)
				teamCalendar.SET_TEAMS_CALENDAR(allMatches)
			},
		}
  },
});


