var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var NavigateAction = require('fluxible-router').navigateAction;
var CircleButton = require('./ui/CircleButton');

var Header = React.createClass({
    render: function() {
        return (
            <header className="o-site-header">
                <div className="logo">
                    <NavLink href="/">
                        <h1>Jackson C Morgan</h1>
                    </NavLink>
                </div>
                <nav className="nav">
                    <CircleButton action={NavigateAction} payload={{method:"GET", url:"/resume"}} actionId="NavigateBlog">
                        Resume
                    </CircleButton>
                    <CircleButton action={NavigateAction} payload={{method:"GET", url:"/blog"}} actionId="NavigateBlog">
                        Blog
                    </CircleButton>
                    <CircleButton action={NavigateAction} payload={{method:"GET", url:"/contact"}} actionId="NavigateContact">
                        Contact
                    </CircleButton>
                    <div className="clear"></div>
                </nav>
                <span className="clear"></span>
            </header>
        );
    }
});

module.exports = Header;