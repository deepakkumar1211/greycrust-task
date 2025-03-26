// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import "./Navbar.css";

// const Navbar = () => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!menuOpen);
//     };

//     return (
//         <nav className="navbar">
//             <div className="nav-left">
//                 <img src="/assets/23.png" alt="Logo" className="logo" />
//             </div>

//             <div className="nav-right">
//                 <div className="menu_bar" onClick={toggleMenu}>
//                     {menuOpen ? <FiX /> : <FiMenu />}
//                 </div>

//                 <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//                     <li><a href="#home">HOME</a></li>
//                     <li><a href="#pricing">PRICING</a></li>
//                     <li><a href="#service">SERVICE</a></li>
                    
//                     <li className="mobile-contact-btn">
//                         <button className="contact-button">Contact Us</button>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("#home"); // Track active section

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
                    {["#home", "#pricing", "#service"].map((section) => (
                        <li 
                            key={section} 
                            className={activeSection === section ? "active" : ""}
                            onClick={() => setActiveSection(section)}
                        >
                            <a href={section}>{section.replace("#", "").toUpperCase()}</a>
                        </li>
                    ))}

                    <li className="mobile-contact-btn">
                        <button className="contact-button">Contact Us</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
