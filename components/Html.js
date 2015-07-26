var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');

var Html = React.createClass({
    render: function() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="stylesheet" href="/public/css/ojm.css" />
            </head>
            <body>
                <span id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></span>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src="/public/js/main.js"></script>
            </html>
        );
    }
});

module.exports = Html;
