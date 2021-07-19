import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";

const width = 500;

const widthModifier = {
  width: `${width}px`,
};

export default function MainNav() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square style={{ display: "flex", justifyContent: "space-around" }}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab icon={<HomeIcon />} label="Home" style={widthModifier} />
        <Tab
          icon={<PeopleAltIcon />}
          label="My Network"
          style={widthModifier}
        />
        <Tab icon={<WorkIcon />} label="Job Offers" style={widthModifier} />
        <Tab icon={<PersonIcon />} label="My Profile" style={widthModifier} />
      </Tabs>
    </Paper>
  );
}
