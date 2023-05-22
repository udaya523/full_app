// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "./Header.css";
// import img from "./img.png";

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="header-container">
//         <div className="Container center">
//           <div className="ui fixed">
//             <div className="header-content">
//               <div className="hamburger-container" onClick={toggleMenu}>
//                 <FontAwesomeIcon icon={faBars} />
//               </div>
//               <div className="logo-heading-container">
//                 <img src={img} alt="Logo" className="logo" />
//                 <h2> Karnataka Results of 2023</h2>
//               </div>
//             </div>
//             <hr className="heading-line" />
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && (
//         <div className="menu">
//           {/* Add your menu items here */}
//           <ul>
//             <li>
//               <button className='btn btn-secondary'> Charts</button>
//             </li>
//             <li>
//               <button className='btn btn-info'>Reports</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import './Header.css';
// import img from './img.png';

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <nav className="header-container">
//         <div className="Container center">
//           <div className="ui fixed">
//             <div className="header-content">
//               <div className="dropdown-container">
//                 {isDropdownOpen && (
//                   <div className="dropdown-menu">
//                     {/* Add your dropdown items here */}
//                     <ul>
//                       <li>Dropdown Item 1</li>
//                       <li>Dropdown Item 2</li>
//                       <li>Dropdown Item 3</li>
//                     </ul>s
//                   </div>
//                 )}
//                 <div className="dropdown-button" onClick={toggleDropdown}>
//                   <FontAwesomeIcon icon={faAngleDown} />
//                   <span>Dropdown</span>
//                 </div>
//               </div>
//               <div className="logo-heading-container">
//                 <img src={img} alt="Logo" className="logo" />
//                 <h2> Karnataka Election Results of 2023</h2>
//               </div>
//             </div>
//             <div className="hamburger-container" onClick={toggleMenu}>
//               <FontAwesomeIcon icon={faBars} />
//             </div>
//             <hr className="heading-line" />
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && (
//         <div className="menu">
//           {/* Add your menu items here */}
//           <ul>
//             <li>
//               <button className="btn btn-secondary">Charts</button>
//             </li>
//             <li>
//               <button className="btn btn-info">Reports</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "./Header.css";
// import img from "./img.png";

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="header-container">
//         <div className="Container center">
//           <div className="ui fixed">
//             <div className="header-content">
//               <div className="dropdown-container">
//                 <div class="btn-group">
//                   <button
//                     class="btn btn-secondary dropdown-toggle"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Dropdown
//                   </button>
//                   <ul class="dropdown-menu">
//                     <li>
//                       <a class="dropdown-item" href="#">
//                         Hebbal
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
//                         Yelanka
//                       </a>
//                     </li>
//                     <li>
//                       <a class="dropdown-item" href="#">
//                        Vijayapura 
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="hamburger-container" onClick={toggleMenu}>
//                 <FontAwesomeIcon icon={faBars} />
//               </div>
//               <div className="logo-heading-container">
//                 <img src={img} alt="Logo" className="logo" />
//                 <h2> Karnataka Results of 2023</h2>
//               </div>
//             </div>
//             <hr className="heading-line" />
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && (
//         <div className="menu">
//           {/* Add your menu items here */}
//           <ul>
//             <li>
//               <button className="btn btn-secondary">Charts</button>
//             </li>
//             <li>
//               <button className="btn btn-info">Reports</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

//added dropdown button with buttons.

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import "./Header.css";
// import img from "./img.png";

// const Header = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <nav className="header-container">
//         <div className="Container center">
//           <div className="ui fixed">
//             <div className="header-content">
//               <div className="dropdown-container">
//                 <div className="btn-group">
//                   <button
//                     className="btn btn-secondary dropdown-toggle"
//                     type="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Dropdown
//                   </button>
//                   <ul className="dropdown-menu">
//                     <li>
//                       <button className="dropdown-item">Hebbal</button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item">Yelanka</button>
//                     </li>
//                     <li>
//                       <button className="dropdown-item">Vijayapura</button>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//               <div className="hamburger-container" onClick={toggleMenu}>
//                 <FontAwesomeIcon icon={faBars} />
//               </div>
//               <div className="logo-heading-container">
//                 <img src={img} alt="Logo" className="logo" />
//                 <h2> Karnataka Results of 2023</h2>
//               </div>
//             </div>
//             <hr className="heading-line" />
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && (
//         <div className="menu">
//           {/* Add your menu items here */}
//           <ul>
//             <li>
//               <button className="btn btn-secondary">Charts</button>
//             </li>
//             <li>
//               <button className="btn btn-info">Reports</button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;

// header.js

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {  useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Header.css";
import img from "./img.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const shouldRenderMenu = location.pathname === "/home";

  return (
    <>
      <nav className="header-container">
        <div className="Container center">
          <div className="ui fixed">
            <div className="header-content">
              <div className="hamburger-container" onClick={toggleMenu} disabled={!shouldRenderMenu}>
                <FontAwesomeIcon icon={faBars} />
              </div>
              <div className="logo-heading-container">
                <img src={img} alt="Logo" className="logo" />
                <h2 style={{paddingTop: '15px'}}> Karnataka Results of 2023</h2>
              </div>
            </div>
            <hr className="heading-line" />
          </div>
        </div>
      </nav>
      {isMenuOpen && shouldRenderMenu && (
        <div className="menu">
          {/* Add your menu items here */}
          <ul>
            <li>
              <Link to="charts">
              <button className="btn btn-secondary">Charts</button>
              </Link>
            </li>
            <li>
            <Link to="reports">
              <button className="btn btn-secondary">Reports</button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;

// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { useLocation, Link } from "react-router-dom";
// import "./Header.css";
// import img from "./img.png";
// import Charts from "./Charts"; // Import the Chat component
// import Reports from "./Reports"; // Import the Reports component
// import { Switch, Route } from "react-router-dom";


// const Header = () => {
//   const location = useLocation();
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const shouldRenderMenu = location.pathname === "/home";

//   return (
//     <>
//       <nav className="header-container">
//         <div className="Container center">
//           <div className="ui fixed">
//             <div className="header-content">
//               {shouldRenderMenu && (
//                 <div className="dropdown-container">
//                   <div className="btn-group">
//                     <button
//                       className="btn btn-secondary dropdown-toggle"
//                       type="button"
//                       data-bs-toggle="dropdown"
//                       aria-expanded="false"
//                       disabled={!shouldRenderMenu}
//                     >
//                       Dropdown
//                     </button>
//                     <ul className="dropdown-menu">
//                       <li>
//                         <button className="dropdown-item">Hebbal</button>
//                       </li>
//                       <li>
//                         <button className="dropdown-item">Yelanka</button>
//                       </li>
//                       <li>
//                         <button className="dropdown-item">Vijayapura</button>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               )}
//               <div
//                 className="hamburger-container"
//                 onClick={toggleMenu}
//                 disabled={!shouldRenderMenu}
//               >
//                 <FontAwesomeIcon icon={faBars} />
//               </div>
//               <div className="logo-heading-container">
//                 <img src={img} alt="Logo" className="logo" />
//                 <h2> Karnataka Results of 2023</h2>
//               </div>
//             </div>
//             <hr className="heading-line" />
//           </div>
//         </div>
//       </nav>
//       {isMenuOpen && shouldRenderMenu && (
//         <div className="menu">
//           <ul>
//             <li>
//               <Link to="/Charts">
//                 <button className="btn btn-secondary">Charts</button>
//               </Link>
//             </li>
//             <li>
//               <Link to="/Reports">
//                 <button className="btn btn-info">Reports</button>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//       <Switch>
//         <Route path="/Charts">
//           <Charts />
//         </Route>
//         <Route path="/Reports">
//           <Reports />
//         </Route>
//       </Switch>
//     </>
//   );
// };

// export default Header;










