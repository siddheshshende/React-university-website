import React from "react";
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "../Css/ListStyle.css";

const List = () => {
    return (
        <>
            <header>
                <div className="container container-flex">
                    <div className="logo-container">
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="clgname">
                        <h4> Sage <br /> University </h4>
                    </div>

                    <nav>
                        <div className="list">
                            <NavLink exact to="/" className="list_item" activeClassName="active_item">Home </NavLink>
                            <NavLink to="/about" className="list_item" activeClassName="active_item">About </NavLink>
                            <NavLink to="/news" className="list_item" activeClassName="active_item"> News </NavLink>
                            <NavLink to="/contact" className="list_item" activeClassName="active_item">Contact </NavLink>
                        </div>
                    </nav>
                    <div className="icons">
                        <SearchIcon className="icon" />
                        <PersonIcon className="icon" />
                        <LocalPhoneIcon className="icon" />
                    </div>
                </div>
            </header>

        </>
    )
}
export default List;