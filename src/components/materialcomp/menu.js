import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LabelIcon from "@material-ui/icons/Label";
import WorkIcon from "@material-ui/icons/Work";
import DeleteIcon from "@material-ui/icons/Delete";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Menu1 from '../menu1'

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [statusState, setStatusState] = React.useState(false);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleUpdateStatus() {
    setStatusState(true);
  }

  function handleUpdate() {
    setStatusState(false);
  }

  function handleClose() {
    setAnchorEl(null);
    setStatusState(false);
  }
  function handleClose1() {
    setStatusState(false);
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        style={{ padding: "5px" }}
        onClick={handleClick}
      >
        <AssignmentIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
    
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      {console.log("Props of Menus", Menu.props)}
        <StyledMenuItem
         onClick={handleUpdate}  >
          <ListItemIcon>
            <WorkIcon />
          </ListItemIcon>
          <ListItemText primary="Update Task " />
        </StyledMenuItem>
        <StyledMenuItem
          onClick={handleUpdateStatus}         
        >
          <ListItemIcon>
            <LabelIcon />
          </ListItemIcon>
          <ListItemText primary="Update Task Status" />
          <Menu1 status = {statusState}/>
        </StyledMenuItem>
      </StyledMenu>
    
    </div>
  );
}
