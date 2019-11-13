import React from "react";
// import "./App.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import RestoreIcon from "@material-ui/icons/Restore";
import DeleteIcon from "@material-ui/icons/Delete";

export default class Comp3 extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <List>
          {this.props.data.map((item, index) => {
            if (item.status === "Trash") {
              return (
                <div>
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={`./images/${item.Image}`} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={item.title}
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            color="textPrimary"
                          >
                            <span>
                              {" "}
                              {`${item.SenderName}  ` +
                                "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0"}
                            </span>
                          </Typography>
                          {item.Mesg}
                          {"\xa0\xa0\xa0"}

                          <DeleteIcon
                            onClick={() => this.props.restoreEmail(index)}
                          ></DeleteIcon>
                          <hr/>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </div>
              );
            }
          })}
        </List>
      </div>
    );
  }
}
