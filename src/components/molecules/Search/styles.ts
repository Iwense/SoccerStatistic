import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

interface IProps {
  showLeftSideBar: boolean;
  mediaQuery: boolean;
  mediaQuery1510px: boolean;
}

export const useStyles = makeStyles((theme) => ({
  "@keyframes animation": {
    "0%": {
      width: "20%",
      backgroundColor: `${Colors.main}4c`,
    },
    "100%": {
      width: "100%",
      backgroundColor: Colors.main,
    }
  },
  container: {
    backgroundColor: Colors.main,
    width: "100%",
    height: 38,
    borderRadius: 30,
    position: "relative",
    justifyContent: "center",
    animationName: "$animation",
    animationDuration: "0.4s",
  },
  

  input: {
    color: Colors.textColor,
    fontSize: 14,
    fontWeight: 550,
    "&::-webkit-input-placeholder": {
      color: Colors.textColor,
      fontSize: 14,
      fontWeight: 550,
      opacity: 1,
    },
    "&::-moz-placeholder": {
      color: Colors.textColor,
      fontSize: 14,
      fontWeight: 550,
      opacity: 1,
    },
    "&:-moz-placeholder": {
      color: Colors.textColor,
      fontSize: 14,
      fontWeight: 550,
      opacity: 1,
    },
    "&:-ms-input-placeholder": {
      color: Colors.textColor,
      fontSize: 14,
      fontWeight: 550,
      opacity: 1,
    }
  },
  inputRoot:{
    padding: "0 0 0 16px",
  },
  
}), {index: 0})