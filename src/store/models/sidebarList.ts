import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {
   list: [
     {
      title: "Главная",
      link: "/"
     },
     {
      title: "Список Лиг",
      link: "/league"
     },
     {
      title: "Список команд",
      link: "/teams"
     },
    //  {
    //   title: "Календарь Лиги",
    //   link: "/league-calendar"
    //  },
    //  {
    //   title: "Календарь команды",
    //   link: "/teams-calendar"
    //  },
   ]
}

export const sidebarList = createModel<RootModel>()({
  state: {
    error: null,
    ...initialState,
  },
  reducers: {
  },
  effects: (dispatch) => ({
  
  }),
});
