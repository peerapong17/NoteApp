import React from "react";

const date = new Date();
const currentTime = date.getFullYear();

function Footer() {
  return <footer>
    <p>copyright © {currentTime}</p>
  </footer>;
}

export default Footer;
