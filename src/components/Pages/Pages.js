import { Paper, Typography } from "@material-ui/core";
import React from "react";
import Page from "./Page/Page";
import dribble from "../../static/images/dribble.png";
import inVision from "../../static/images/InVision.png";
import sketch from "../../static/images/sketch.png";
import slack from "../../static/images/slack.png";
import "./Pages.css";

const Pages = () => {
  return (
    <Paper style={{ padding: "10px" }}>
      <Typography variant="h6" style={{ color: "grey" }}>
        Pages people also viewed
      </Typography>
      <Page name="InVision" type="Internet" followers="137k" logo={inVision} />
      <Page name="Sketch" type="Design" followers="33k" logo={sketch} />
      <Page name="Dribble" type="Design" followers="162k" logo={dribble} />
      <Page name="Slack" type="Software" followers="192k" logo={slack} />
      <hr />
      <div
        className="pagesLink"
        style={{
          display: "flex",
          color: "grey",
          justifyContent: "center",
          fontWeight: "800",
        }}
      >
        See all similar pages
      </div>
    </Paper>
  );
};

export default Pages;
