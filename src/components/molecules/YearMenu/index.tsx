import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useStyles } from "./styles";

function generateArrayOfYears() {
  var max = new Date().getFullYear();
  var min = max - 11;
  var years = [];

  for (var i = max; i >= min; i--) {
    years.push(i);
  }
  return years;
}

const years = generateArrayOfYears();

const StyledMenu = withStyles({
  paper: {
    background: "#1d233d",
    color: "#848cb3",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

interface IProps {
  onClick?: (e?: any) => void;
}

export const YearMenu: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { onClick } = props;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const clickYear = (item: string) => {
    !!onClick && onClick(item);
    handleClose();
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        className={classes.btn}
        onClick={handleClick}
      >
        Выбрать год
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {years.map((item: any) => (
          <MenuItem onClick={() => clickYear(item)}>{item}</MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default YearMenu;
