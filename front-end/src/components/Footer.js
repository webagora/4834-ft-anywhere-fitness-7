import React from "react";
import { Link } from 'react-router-dom';
import "../CSS/Footer.css";


const Footer = () => {

    return (
        <div className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Link className="home-button" to='/'>Anywhere Fitness</Link>
                    <Link className="button" to='/classes'>Browse Classes</Link>
                    <Link className="button" to='/login'>Login</Link>
                    <Link className="button" to='/register'>Register</Link>
                    </div>
                    <div className="col">
                        <h4>Meet the team!</h4>
                        <ul className="list-unstyled">
                            <li>Brandi Ball</li>
                            <li>Cam Meiners</li>
                            <li>Collyn Godlewski</li>
                            <li>James Calvo</li>
                            <li>Kat Yevsukov</li>
                            <li>Rongjun Geng</li>
                            <li>Tuan Nguyen</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="copyright">
                        <p className="col-sm">
                            &copy;{new Date().getFullYear()} Anywhere Fitness | All rights reserved | Terms of Service | Privacy
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;