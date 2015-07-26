var React = require('react');
var NavLink = require('fluxible-router').NavLink; 

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
                    <NavLink href="/blog">
                        <div className="o-circle-button">Blog</div>
                    </NavLink>
                    <NavLink href="/contact">
                        <div className="o-circle-button">Contact</div>
                    </NavLink>
                    <div className="clear"></div>
                </nav>
                <span className="clear"></span>
            </header>
        );
    }
});

module.exports = Header;