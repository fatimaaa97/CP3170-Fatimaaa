import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PanToolIcon from "@material-ui/icons/PanTool";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Comp2 from "./Components/Comp2";
import Comp1 from "./Components/Comp1";
import Comp3 from "./Components/Comp3";
import Comp4 from "./Components/Comp4";
import Comp5 from "./Components/comp5";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./App.css";

import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import EmailIcon from "@material-ui/icons/Email";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";

export default class App extends React.Component {
  state = {
    selectedPage: "Inbox",
    status: true,

    styleA: { height: 60, marginLeft: 100, display: "flex" },

    //styleB: {height: 60, marginLeft: 100, display: "flex"},
    emailData: [
      {
        SenderName: "Ahmed",
        Mesg: "Important Weather Advisory",
        Image: "ahmed.png",
        status: "Inbox"
      },
      {
        SenderName: "George",
        Mesg: "Rock the color of the year",
        Image: "george.png",
        status: "Inbox"
      },
      {
        SenderName: "Gillan",
        Mesg: "Hello, How are you?",
        Image: "gillian.png",
        status: "Inbox"
      },
      {
        SenderName: "Hania",
        Mesg: "Okay Cool!!",
        Image: "hania.png",
        status: "Inbox"
      },
      {
        SenderName: "Mariam",
        Mesg: "How You doing?",
        Image: "mariam.png",
        status: "Inbox"
      },
      {
        SenderName: "Robert",
        Mesg: "Stop Pranking me!!",
        Image: "robert.png",
        status: "Inbox"
      }
    ]
  };

  handleDelete = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Trash";
    this.setState({ emailData: temp });
  };

  handleRestore = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Inbox";
    this.setState({ emailData: temp });
  };

  handleFav = Index => {
    const temp = this.state.emailData;
    temp[Index].status = "Important";
    this.setState({ emailData: temp });
  };

  handleChanges = text => {
    this.setState({ selectedPage: text });
  };

  handleDrawer = () => {
    this.setState({ status: !this.state.status });
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar>
          <div style={this.state.styleA}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawer}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Persistent drawer it is
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
        <nav style={{ marginLeft: 300 }} aria-label="mailbox folders">
          <div>
            <Drawer variant="persistent" anchor="left" open={this.state.status}>
              <div />
              <div style={{ textAlign: "left" }}>
                <IconButton onClick={this.handleDrawer}>
                  <h4> {"\xa0\xa0\xa0"} CP 3170</h4>
                </IconButton>
              </div>
              <Divider />
              <List style={{ height: 200, backgroundColor: "lightgrey"}}>
                {["Inbox", "Trash", "Important", "Spam"].map((text, index) => (
                  <ListItem
                    button
                    key={text}
                    onClick={() => this.handleChanges(text)}
                  >
                    <ListItemIcon>
                      {/* {index % 2 === 0 ? <WbSunnyIcon /> : <PanToolIcon />} */}
                      {text === "Inbox" ? (
                        <InboxIcon />
                      ) : text === "Trash" ? (
                        <DeleteSweepIcon />
                      ) : text === "Spam" ? (
                        <EmailIcon />
                      ) : (
                        <StarIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </div>
          <Divider />
        </nav>
        <main style={{ marginLeft: 160 }}>
          <div style={{ marginTop: 80 }} />
          {this.state.selectedPage === "Inbox" ? (
            <Comp2
              data={this.state.emailData}
              deleteEmail={this.handleDelete}
              FavEmail={this.handleFav}
            />
          ) : this.state.selectedPage === "Trash" ? (
            <Comp3
              data={this.state.emailData}
              restoreEmail={this.handleRestore}
            />
          ) : this.state.selectedPage === "Important" ? (
            <Comp1 data={this.state.emailData} FavEmail={this.handleFav} restoreEmail={this.handleRestore}/>
          ) : null}
        </main>
      </div>
    );
  }
}
