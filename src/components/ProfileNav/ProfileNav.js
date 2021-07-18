import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function ProfileNAv() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper>
      <Tabs
        value={value}
        // color="primary"
        // textColor="primary"
        onChange={handleChange}
        // aria-label="disabled tabs example"
        style={{ color: "green" }}
      >
        <Tab label="Overview" style={{ minWidth: "10%" }} />
        <Tab label="About" style={{ minWidth: "10%" }} />
        <Tab label="Products" style={{ minWidth: "10%" }} />
        <Tab label="Posts" style={{ minWidth: "10%" }} />
        <Tab label="Jobs" style={{ minWidth: "10%" }} />
        <Tab label="People" style={{ minWidth: "10%" }} />
        <Tab label="Videos" style={{ minWidth: "10%" }} />
      </Tabs>
    </Paper>
  );
}
