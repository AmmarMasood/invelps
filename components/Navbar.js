import React from "react";
import Logo from "../public/images/logo.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "../public/images/menu.png";
import Link from "next/link";
import styles from "@/styles/Navbar.module.css"; // import "../assets/styles/Navbar.css";
import Image from "next/image";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.navbar}>
      <Image src={Logo} alt="invelps" />
      <ul className={styles.navbarList}>
        <a href="#home" className={styles.achorStyle}>
          <li>Home</li>
        </a>
        <a href="#services" className={styles.achorStyle}>
          <li>Services</li>
        </a>
        <a href="#aboutus" className={styles.achorStyle}>
          <li>About Us</li>
        </a>
        <Link href="/contact" className={styles.achorStyle}>
          <li>Contact</li>
        </Link>
      </ul>
      <ul className={`${styles.navbarList} ${styles.navbarListSecond}`}>
        <li>Login</li>
        <li>Signup</li>
      </ul>
      <div className={styles.navbarMobileContainer}>
        <Image src={MenuIcon} alt="" onClick={handleClick} height="30" />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose} className={styles.menuItemStyle}>
            <a href="#home" className={styles.achorStyle}>
              <li>Home</li>
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuItemStyle}>
            <a href="#services" className={styles.achorStyle}>
              <li>Services</li>
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuItemStyle}>
            <a href="#aboutus" className={styles.achorStyle}>
              <li>About Us</li>
            </a>
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuItemStyle}>
            <Link href="/contact" className={styles.achorStyle}>
              <li>Contact</li>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuItemStyle}>
            Login
          </MenuItem>
          <MenuItem onClick={handleClose} className={styles.menuItemStyle}>
            Signup
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
