import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    width: 250,
    height: 140,
    boxSizing: "border-box",
    background: Colors.main,
    transition: "background-color 0.1s",
    cursor: "pointer",
    borderRadius: 12,
   //  border: `1px solid ${Colors.border}`,
    marginRight: 24,
    marginTop: 24,
    padding: "24px 32px",
    boxShadow: `0 0 10px #0000007a`,
    "&:hover": {
      backgroundColor: Colors.second,
      transition: "background-color 0s",
    }
  },
  title:{
     display: "flex",
     justifyContent: "flex-start",
     alignItems: "center",
     marginBottom: 12,
  },
  name:{
    color: Colors.textColor,
    fontSize: 14,
  },
  contry:{
    color: Colors.textColor,
    fontSize: 12,
  },
  logo:{
     width: 50,
     height: 50,
     marginRight: 8,
  }
  
});
