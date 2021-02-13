import React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import { useHistory } from "react-router-dom";
import { links } from "../../../routes";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import SidebarItem from "../../atoms/SidebarItem";

interface IData {
  title: string;
  link: string;
}

interface IProps {
  className?: string;
  onClick?: () => void;
  data: IData[];
}

const defaultProps: IProps = {
  className: "",
  onClick: () => null,
  data: [],
};

const SidebatListItems: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const { onClick, data } = props;
  const history = useHistory();

  // onClick={() => {history.push(links.league())}}
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {Boolean(data.length) &&
        data.map((item: IData, index: number) => (
          <SidebarItem
            key={`key-link-${index}`}
            title={item.title}
            onClick={(e: any) => {
              e.stopPropagation();
              history.push(item.link);
            }}
          />
        ))}
    </List>
  );
};

SidebatListItems.defaultProps = defaultProps;
export default SidebatListItems;
