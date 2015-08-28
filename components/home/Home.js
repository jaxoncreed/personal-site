var React = require('react');
var NavLink = require('fluxible-router').NavLink;
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Home = React.createClass({
    render: function() {

        return (
             <div className="home-splash" key="home">
                <div className="blogCenter">
                    <h1 className="center">Full Stack Developer</h1>
                    <h3 className="center">
                        Ha ha! Get it? Yeah um... erm... Just go to the <NavLink href="/blog" preserveScrollPosition={true}>blog</NavLink>.
                    </h3>
                </div>
            </div>
        );
    }
});

module.exports = Home;