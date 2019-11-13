import React from "react";
// import "./App.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default class Comp2 extends React.Component {
  state = {
    styleB: { backgroundColor: "lightgrey", height: 60, marginLeft: 40 }
  };

  render() {
    return (
      <div style={this.state.styleB}>
        <List>
          {this.props.data.map((item, index) => {
            if (item.status === "Inbox") {
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

                          {"\xa0\xa0"}
                          <DeleteIcon
                            onClick={() => this.props.deleteEmail(index)}
                          ></DeleteIcon>
                          {"\xa0\xa0\xa0"}

                          <FavoriteBorderIcon
                            onClick={() => this.props.FavEmail(index)}
                          ></FavoriteBorderIcon>
                          <hr />
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
