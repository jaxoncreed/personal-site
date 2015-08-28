/*globals document*/

var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var SideBar = require('./SideBar');
var ApplicationStore = require('../stores/ApplicationStore');
var connectToStores = require("fluxible-addons-react").connectToStores;
var provideContext = require('fluxible-addons-react').provideContext;
var handleHistory = require('fluxible-router').handleHistory;

var Application = React.createClass({
    render: function() {

        var Handler = this.props.currentRoute.get('handler');

        return (
            <div className="o-site-container">
                <Header />
                <div className="o-site-content">
                    <SideBar />
                    <Handler key={this.props.pageTitle}  />
                </div>
                <Footer />
            </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        var newProps = this.props;
        if (newProps.pageTitle === prevProps.pageTitle) {
            return;
        }
        document.title = newProps.pageTitle;
    }
});

module.exports = handleHistory(provideContext(connectToStores(
    Application,
    [ApplicationStore],
    function (context, props) {
        var appStore = context.getStore(ApplicationStore);
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages()
        };
    }
)));
