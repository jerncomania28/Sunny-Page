import { useState } from "react";
import { Link } from "react-router-dom"

//assets 
import Logo from "../../assets/logo.svg";
import Hamburger from "../../assets/icon-hamburger.svg";



const Navigation = () => {
    const [isHamburgerActive, setIsHambugerActive] = useState(false);


    console.log(isHamburgerActive);
    const handleHamburger = () => {
        setIsHambugerActive(!isHamburgerActive);
    }

    const NAV_MENU = ["about", "services", "projects"];
    return (
        <nav className="navigation">

            <div className="navigation-container">

                <div className="navigation__logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="navigation-menu">
                    {
                        NAV_MENU.map((menuItem, index) => <Link to={`/${menuItem}`} className="navigation-menu__menuItem" key={index}>{menuItem}</Link>)
                    }
                    <Link to="/contact" className="navigation-menu__contact"> contact  </Link>
                </div>
                <div className="navigation__hamburger" onClick={handleHamburger}>
                    <img src={Hamburger} alt="hamburger" />

                    <div className={isHamburgerActive ? "navigation-menu--mobile navigation-menu--mobile--show" : "navigation-menu--mobile navigation-menu--mobile--hide"}>
                        
                        {
                            NAV_MENU.map((menuItem, index) => <Link to={`/${menuItem}`} className="navigation-menu--mobile__menuItem" key={index}>{menuItem}</Link>)
                        }
                        <Link to="/contact" className="navigation-menu--mobile__contact">Contact</Link>

                    </div>
                </div>

            </div>

        </nav >
    )
}

export default Navigation;