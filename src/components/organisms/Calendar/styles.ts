import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  calendar: {
   display: "block",
   position: "relative",
   width: "100%",
   background: Colors.main,
   border: `1px solid ${Colors.border}`,
   },
   body: {
      fontFamily: "'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      fontSize: "1em",
      fontWeight: 300,
      lineHeight: "1.5",
      color: Colors.textColor,
      background: Colors.main,
      position: "relative"
   },
   header: {
      textTransform: "uppercase",
      fontWeight: 700,
      fontSize: 24,
      padding: "32px 12px",
      borderBottom: `1px solid ${Colors.border}`,
      display:"flex",
      justifyContent: "space-between",
      alignItems: "center",
   },
   currentMonth:{
      fontSize: 24,
   },
   days: {
      textTransform: "uppercase",
      fontWeight: 400,
      color: Colors.textColor,
      fontSize: "70%",
      padding: ".75em 0",
      borderBottom: `1px solid ${Colors.border}`,
   },
   cell: {
      position: "relative",
      minHeight: 100,
      borderRight: `1px solid ${Colors.border}`,
      borderBottom: `1px solid ${Colors.border}`,
      overflow: "hidden",
      cursor: "pointer",
      background: Colors.main,
      transition: "0.25s ease-out",
      '&:hover': {
         background: Colors.second,
         transition: "0.5s ease-out",
         color: Colors.white,
      },
   },
   row: {
      margin: "0",
      padding: "0",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      width: "100%",
      minHeight: 60,
   },
   rowMiddle: {
      alignItems: "center"
   },
   col: {
      flexGrow: 1,
      flexBasis: "0",
      maxWidth: "100%",
   },
   colStart: {
      justifyContent: "flex-start",
      textAlign: "left"
   },
   colCenter: {
      justifyContent: "center",
      textAlign: "center",
      padding: "32px 12px"
   },
   colEnd: {
      justifyContent: "flex-end",
      textAlign: "right"
   },
   bodyRow: {
      borderBottom: `1px solid ${Colors.border}`,
      '&:last-child': {
         borderBottom: `none`,
      }
   },
   disabled:{
      color: Colors.white,
      pointerEvents: "none",
   },
   selected:{
      background: "linear-gradient(45deg, #1a8fff73 0%,#3ad0ff47 90%)",
   },
   number: {
      position: "absolute",
      fontSize: "82.5%",
      lineHeight: "1",
      top: ".75em",
      right: ".75em",
      fontWeight: 700,

   },
   bg:{
      fontWeight: 700,
      lineHeight: "1",
      color: Colors.textColor,
      opacity: "0",
      fontSize: "8em",
      position: "absolute",
      top: "-.2em",
      right: "-.05em",
      transition: ".25s ease-out",
      letterSpacing: "-.07em"
   },
   colBody: {
      flexGrow: 0,
      flexBasis: "calc(100%/7)",
      width: "calc(100%/7)" 
   },
   content: {
   },
   headerTitle: {
     fontSize: 24,
     color: Colors.textColor,
   },
   icon:{
      width: 30,
      height: 30,
      cursor: "pointer",
      '& img': {
         maxWidth: "100%",
      }
   },
   iconLeft: {
      marginLeft: "auto",
   },
   matchesDayWrapper:{
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: "20px 8px 8px 8px",
   },
   competition:{
      borderTop: `1px solid ${Colors.textColor}`,
      fontSize: 12,
      padding: "4px 0px",
   },
   link:{
      textDecoration: "underline",
      color: Colors.textActiveColor,
      cursor: "pointer",
   },
   noCalendar:{
      display: "inline-block",
   },
});
