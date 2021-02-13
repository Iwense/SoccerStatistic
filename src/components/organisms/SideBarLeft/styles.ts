import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(() => ({
   wrapper:{   
      background: Colors.main,
      color: Colors.textColor,
      width: 250,
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "center",
   },
   imageBox:{
      width: 100,
   },
   image:{
      maxWidth: "100%",
   },
}))