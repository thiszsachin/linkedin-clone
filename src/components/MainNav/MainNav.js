import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function MainNav() {
  const [value, setValue] = React.useState(2);

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
        <Tab label="Home" />
        <Tab label="My Network" />
        <Tab label="Job Offers" />
        <Tab label="My Profile" />
      </Tabs>
    </Paper>
  );
}
