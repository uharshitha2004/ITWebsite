import React from "react";
import "./footer.css"; // Ensure this file exists in `src`

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} IT Company. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
