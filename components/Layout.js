import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";

const titleStyle = {
  marginRight: "16px",
  color: "inherit",
  textDecoration: "none",
};

const contentStyle = {
  backgroundColor: "#fff",
  padding: "64px 0 48px",
};

const footerStyle = {
  backgroundColor: "#fff",
  padding: "48px",
};

const MyLayout = ({ children }) => {
  return (
    <React.Fragment>
      <CssBaseline />

      <header>
        <AppBar position="relative" style={{ flexGrow: "1" }}>
          <Toolbar>
            <Link href="/">
              <a style={titleStyle}>
                <div className="font">
                  <h2>Awesome food Store</h2>
                </div>
              </a>
            </Link>
            <Link href="/about">
              <Button color="inherit">about</Button>
            </Link>
            <Link href="/store">
              <Button color="inherit">store</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </header>

      <main>
        <div style={contentStyle}>{children}</div>
      </main>

      <footer style={footerStyle}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright © 2018 purpleworks"}
        </Typography>
      </footer>

      <style jsx>{`
        .font {
          font-family: 'Bebas Neue', cursive;
          text-align: center;
          letter-spacing: 2px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default MyLayout;
