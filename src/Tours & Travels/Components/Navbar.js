import { Component } from "react";
import "./Navbarstyle.css";
//import MenuItems from "../const/menuitems";
import MenuItems from "../const/menuitems";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Mohan Tours</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.url} className={item.cName}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                    <NavLink to='/login'> <button className="signup">Sign Up</button></NavLink>
                </ul>
            </nav>
        )
    }
}
export default Navbar;