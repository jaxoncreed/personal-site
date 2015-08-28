var React = require('react');
var connectToStores = require("fluxible-addons-react").connectToStores;
var LayoutStore = require('../stores/LayoutStore');
var NavigateAction = require('fluxible-router').navigateAction;
var ToggleSideBar = require('../actions/toggleSideBar');

var SideBar = React.createClass({
    itemClicked: function(route) {
        context.executeAction(NavigateAction, route);
        context.executeAction(ToggleSideBar);
    },

    render: function() {
        var conditionalStyle = (this.props.sideBarOpen) ? {right: "0px"} : {right: "-230px"};

        return (
            <nav className="o-site-side-bar" style={conditionalStyle}>
                <ul>
                    <li onClick={this.itemClicked.bind(null, {method:"GET", url:"/resume"})}>Resume</li>
                    <li onClick={this.itemClicked.bind(null, {method:"GET", url:"/blog"})}>Blog</li>
                    <li onClick={this.itemClicked.bind(null, {method:"GET", url:"/contact"})}>Contact</li>
                </ul>
            </nav>
        );
    }
});

module.exports = connectToStores(
    SideBar,
    [LayoutStore],
    function (context, props) {
        return {
            sideBarOpen: context.getStore(LayoutStore).isSideBarOpen()
        }
    }
);