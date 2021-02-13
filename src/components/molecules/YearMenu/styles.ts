import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(theme => ({
   btn:{
      background: Colors.second,
      color: Colors.textColor,
      '&:hover': {
         background: Colors.main,
      }
   }
}));
