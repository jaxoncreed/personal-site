var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;
var ToggleSideBar = require('../actions/toggleSideBar');
var CircleButton = require('./ui/CircleButton');

var Header = React.createClass({
    render: function() {
        return (
            <header className="o-site-header">
                <div className="logo">
                    <NavLink href="/">
                        <h1 className="largeLogo">Jackson C Morgan</h1>
                        <h1 className="smallLogo">JCM</h1>
                    </NavLink>
                </div>
                <nav className="nav">
                    <CircleButton action={NavigateAction} payload={{method:"GET", url:"/resume"}} actionId="NavigateBlog">
                        Resume
                    </CircleButton>
                    <CircleButton action={NavigateAction} payload={{method:"GET", url:"/blog"}} actionId="NavigateContact">
                        Blog
                    </CircleButton>
                    <CircleButton action={NavigateAction} payload={{method:"GET", url:"/contact"}} actionId="NavigateContact">
                        Contact
                    </CircleButton>
                    <div className="clear"></div>
                </nav>
                <nav className="smallNav">
                    <CircleButton action={ToggleSideBar} payload={{method:"GET", url:"/contact"}} actionId="SideBarToggling">
                        <span style={{fontSize: "150%"}}>☰</span>
                    </CircleButton>
                </nav>
                <span className="clear"></span>
            </header>
        );
    }
});

module.exports = Header;