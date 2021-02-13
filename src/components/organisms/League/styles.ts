import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
   display: "flex",
   justifyContent: "flex-start",
   alignItems: "center",
   flexWrap: "wrap",
  },
  content: {
  },
  headerTitle: {
    fontSize: 24,
    color: Colors.textColor,
  },
  box:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  }
  
});
