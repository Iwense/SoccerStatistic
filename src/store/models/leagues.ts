import { createModel } from "@rematch/core";
import { RootModel } from ".";


export const leagues = createModel<RootModel>()({
  state: {
	leagues: [],
  },
  reducers: {
    SET_LEAGUES: (state: any, leagues: any[]) => {
			return {
				...state,
				leagues,
			}
		},
  },
  effects: (dispatch) => {
    const { leagues } = dispatch
		return {
			async getPlayers(): Promise<any> {
				let response = await fetch(`http://api.football-data.org/v2/competitions/`, {
					headers: {
						"X-Auth-Token": `${process.env.REACT_APP_API_KEY}`,
					},
    				method: "GET",
				})
				let {competitions}: {competitions: any[]} = await response.json()
				leagues.SET_LEAGUES(competitions)
			},
		}
  },
});


