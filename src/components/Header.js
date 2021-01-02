import React from 'react'
import menuIcon from '../img/menu.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="main-header">
            <div className="logo-header">
                <Link to="/" className="logo" style={{color:"#fff"}}>
                    <strong>NÖBETÇİ ECZANELER</strong>
                </Link>
                <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <img src={menuIcon} style={{width:"20px"}} alt="Nöbetçi Eczaneler" />
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Header;
