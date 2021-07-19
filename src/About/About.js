import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function About() {
  return (
    <Paper style={{ padding: "15px" }}>
      <Typography variant="h6" style={{ color: "grey", marginBottom: "15px" }}>
        About
      </Typography>
      <Typography variant="body2" style={{ paddingBottom: "15px" }}>
        Figma is the professional-grade online tool created specifically for the
        interface design. Born on the Web, Figma helps the entire products team
        create, test, and ship better designs, faster.
      </Typography>
      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "1px solid grey",
            width: "50%",
            padding: "10px",
            marginRight: "10px",
            borderRadius: "8px",
          }}
        >
          <p>Website URl</p>
          <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
            Figma.com
          </a>
        </div>
        <div
          style={{
            border: "1px solid grey",
            width: "50%",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <p style={{ color: "grey" }}>Funding via Crunchbase</p>
          <h4>Series D</h4>
          <span style={{ color: "blue", fontWeight: "600" }}>US$ 50M</span>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          height: "50px",
        }}
      >
        <a href="/"> See all details</a>
      </div>
    </Paper>
  );
}
