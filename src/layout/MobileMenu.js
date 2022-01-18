import Link from "next/dist/client/link";
import { Fragment, useState } from "react";
import {
  BlogMenu,
  CoursesMenu,
  HomeMenu,
  PageMenu,
  PortfolioMenu,
} from "./Menu";

const MobileMenu = ({ closeMobileMenu, showMobileMenu }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeFun = (name) => setActiveMenu(name === activeMenu ? "" : name);
  const activeLi = (name) =>
    name === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <aside
        className={`aside_bar aside_bar_left aside_mobile ${
          showMobileMenu ? "open" : ""
        }`}
      >
        {/* logo */}
        <Link href="/">
          <a className="logo">
            <img src="assets/images/logo1.png" alt="logo" />
          </a>
        </Link>
        {/* logo */}
        {/* Menu */}
        <nav>
          <ul className="main-menu">
            <li className="menu-item ">
              <a href="http://localhost:3000/" onClick={() => activeFun("Home")}>
                Home
              </a>
            { /* <ul className="sub-menu" style={activeLi("Home")}>
                <HomeMenu />
              </ul>*/}
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" onClick={() => activeFun("Courses")}>
                Courses
              </a>
              <ul className="sub-menu" style={activeLi("Courses")}>
                <CoursesMenu />
              </ul>
            </li>
            <li className="menu-item ">
              <Link href="/mock" onClick={() => activeFun("Pages")}>
                Mock Test
              </Link>
              {/* <ul className="sub-menu" style={activeLi("Pages")}>
                <PageMenu />
              </ul> */}
            </li>
             <li className="menu-item ">
              <a href="#" onClick={() => activeFun("Blog")}>
                Login
              </a>
              {/* <ul className="sub-menu" style={activeLi("Blog")}>
                <BlogMenu />
              </ul> */}
            </li> 
            {/* <li className="menu-item menu-item-has-children">
              <a href="#" onClick={() => activeFun("Portfolio")}>
                Portfolio
              </a>
              <ul className="sub-menu" style={activeLi("Portfolio")}>
                <PortfolioMenu />
              </ul>
            </li> */}
            <li className="menu-item">
              <Link href="/contact">Contacts</Link>
            </li>
          </ul>
        </nav>
        {/* Menu */}
      </aside>
      <div
        className="aside-overlay trigger-left"
        onClick={() => closeMobileMenu()}
      ></div>
    </Fragment>
  );
};

export default MobileMenu;
