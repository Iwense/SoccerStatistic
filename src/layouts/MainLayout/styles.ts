import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../styles/Colors";

export const useStyles = makeStyles(() => ({
   mainWrapper: {
      // overflow: "hidden"
    },
    sideBarLeft: {
      height: "100%",
      backgroundColor: "#fff",
      overflowX: "hidden",
      zIndex: 100,
      "&::-webkit-scrollbar": {
        width: 0
      },
    },
    contentContainer: {
      overflow: "hidden"

    },
    content: {
      backgroundColor: Colors.second,
      padding: "24px 24px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      minWidth: "calc(100% - 640px)",
      flex: 4,
      overflow: "scroll",
      overflowX: "hidden",
      "&::-webkit-scrollbar": {
        width: 0
      }
    },
    contentWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width:"100%",
    },
}))