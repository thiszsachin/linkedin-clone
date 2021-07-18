import React from "react";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import { Avatar } from "@material-ui/core";

const Page = ({ name, type, followers, logo }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div>
        <Avatar alt="Remy Sharp" src={logo} />
      </div>
      <div>
        <div style={{ color: "grey" }}>
          <h3>{name}</h3>
          <p>
            {type} . {followers} followers
          </p>
        </div>
      </div>
      <div>
        <PersonAddOutlinedIcon color="primary" />
      </div>
    </div>
  );
};

export default Page;
