/*globals document*/

var React = require('react');
var Header = require('./Header');
var Footer = require('./Footer');
var ApplicationStore = require('../stores/ApplicationStore');
var provideContext = require('fluxible/addons/provideContext');
var connectToStores = require('fluxible/addons/connectToStores');
var handleHistory = require('fluxible-router').handleHistory;

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var Application = React.createClass({
    render: function() {
        var Handler = this.props.currentRoute.get('handler');

        return (
            <div className="o-site-container">
                <Header />
                <div className="o-site-content">
                    <ReactCSSTransitionGroup transitionName="hometransition" transitionAppear={true}>
                        <Handler key={this.props.pageTitle}  />
                    </ReactCSSTransitionGroup>
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
    function (stores, props) {
        var appStore = stores.ApplicationStore;
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            pages: appStore.getPages()
        };
    }
)));
