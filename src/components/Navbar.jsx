// import React from "react";
// import "./Navbar.css";

// const Navbar = () => {
//     return (
//         <nav className="navbar">

//             {/* Left Section - Logo */}
//             <div className="nav-left">
//                 <img
//                 src="/assets/23.png"
//                 alt="Logo"
//                 className="logo"
//                 />
//             </div>

//             {/* Right Section - Navigation Links */}
//             <div className="nav-right">
//                 <ul className="nav-links">
//                     <li>
//                         <a href="#home">HOME</a>
//                     </li>
//                     <li>
//                         <a href="#service">SERVICE</a>
//                     </li>
//                     <li>
//                         <a href="#pricing">PRICING</a>
//                     </li>
//                 </ul>
                
//                 {/* Contact Button */}
//                 <div className="contact-btn">
//                     <button>Contact Us</button>
//                 </div>

//                 {/* Menu Icon for Mobile View */}
//                 <div className="menu_bar">
//                     <i className="ri-menu-3-line"></i>
//                 </div>
//             </div>
//         </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <img src="/assets/23.png" alt="Logo" className="logo" />
            </div>

            <div className="nav-right">
                <div className="menu_bar" onClick={toggleMenu}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </div>

                <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#pricing">PRICING</a></li>
                    <li><a href="#service">SERVICE</a></li>
                    
                    <li className="mobile-contact-btn">
                        <button className="contact-button">Contact Us</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
