import { createModel } from "@rematch/core";
import { RootModel } from ".";



export const teams = createModel<RootModel>()({
  state: {
	teams: [],
  },
  reducers: {
    SET_TEAMS: (state: any, teams: any[]) => {
			return {
				...state,
				teams,
			}
		},
  },
  effects: (dispatch) => {
    const { teams } = dispatch
		return {
			async getTeams(): Promise<any> {
				let response = await fetch(`http://api.football-data.org/v2/teams`, {
					headers: {
						"X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
					},
    				method: "GET",
				})
				let {teams: teamsList}: {teams: any[]} = await response.json()
				teams.SET_TEAMS(teamsList)
			},
		}
  },
});


