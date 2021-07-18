import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
        <Tab label="Home" style={widthModifier} />
        <Tab label="My Network" style={widthModifier} />
        <Tab label="Job Offers" style={widthModifier} />
        <Tab label="My Profile" style={widthModifier} />
      </Tabs>
    </Paper>
  );
}
