import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            {/* footer */}
            <footer id="footer">
                <div id="footer-widgets" className="container style-1">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="widget widget_text">
                                <h2 className="widget-title"><span>À propos</span></h2>
                                <div className="textwidget">
                                    <a className="navbar-brand" href="index-building.html"><img src="images/logo.png" alt="image" /><span>Sanعa</span></a>
                                    <p>Aenean suscipit eget mi act fermentum phasellus vulputate turpis tincidunt. Aenean suscipit eget. Aenean suscipit eget mi act fermentum phasellus vulputate turpis tincidunt. Aenean suscipit ege  Aenean suscipit eget mi act fermentum phasellus.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget_links">
                                <h2 className="widget-title"><span>Sanعa</span></h2>
                                <ul className="wprt-links clearfix col2">
                                <li><Link to="/" data-scroll >Acceuil</Link></li>
                                <li><Link to="/a-propos" data-scroll >À propos</Link></li>
                                <li><Link to="/inscription" data-scroll >Inscription</Link></li>
                                <li><Link to="/connexion" data-scroll >Se connecter</Link></li>  
                                <li><Link to="/contact" data-scroll >Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget_information">
                                <h2 className="widget-title"><span>CONTACT INFO</span></h2>
                                <ul>
                                    <li className="address clearfix">
                                        <span className="hl">Address:</span>
                                        <span className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                    </li>
                                    <li className="phone clearfix">
                                        <span className="hl">Phone:</span>
                                        <span className="text">+216 00 000 000</span>
                                    </li>
                                    <li className="email clearfix">
                                        <span className="hl">E-mail:</span>
                                        <span className="text">business@support.com</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget_socials">
                                <div className="socials">
                                    <a target="_blank" href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                    <a target="_blank" href="#"><i className="fa fa-youtube" aria-hidden="true" /></a>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="bottom" className="clearfix style-1">
                    <div className="container">
                        <div id="bottom-bar-inner" className="wprt-container">
                            <div className="bottom-bar-inner-wrap">
                                <div className="bottom-bar-content">
                                    <div id="copyright">All Rights Reserved. Sanعa © 2019</div>
                                    {/* /#copyright */}
                                </div>
                                {/* /.bottom-bar-content */}
                                <div className="bottom-bar-menu pull-right">
                                    <ul className="bottom-nav">
                                        <li><a href="#/">HISTORY</a></li>
                                        <li><a href="#/">FAQ</a></li>
                                        <li><a href="#/">EVENTS</a></li>
                                    </ul>
                                </div>
                                {/* /.bottom-bar-menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end footer */}
            <a href="#home" data-scroll className="dmtop global-radius"><i className="fa fa-angle-up" /></a>


        </div>);
    }
}

export default Footer;