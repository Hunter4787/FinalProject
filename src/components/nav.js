import React, { Component } from 'react'

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div>
            <header className="header header_style_01">
                <nav className="megamenu navbar navbar-default affix-top" data-spy="affix">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="images/logo.png" alt="image" /><span>San3a</span></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="active"><a data-scroll href="#home">Home</a></li>
                                <li><a data-scroll href="#Se connecter">Se connecter</a></li>
                                <li><a data-scroll href="#S'inscrire">S'inscrire</a></li>
                                <li><a data-scroll href="#contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>);
    }
}

export default Nav;
