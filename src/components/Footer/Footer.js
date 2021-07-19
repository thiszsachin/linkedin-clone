import React from "react";

const Footer = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h4>About</h4>
        <h4>Accessibility</h4>
        <h4>Help Center</h4>
      </div>
      <hr />
      <div>
        <span style={{ fontWeight: "1000", marginRight: "100px" }}>
          Linked{" "}
          <span
            style={{
              color: "white",
              height: "13px",
              width: "13px",
              backgroundColor: "blue",
            }}
          >
            In
          </span>
        </span>

        <span>LinkedIn &#169; 2021</span>
      </div>
    </>
  );
};

export default Footer;
