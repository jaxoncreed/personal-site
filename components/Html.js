var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');

var Html = React.createClass({
    render: function() {
        return (
            <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                <meta name="viewport" content="width=device-width, user-scalable=no" />
                <link rel="stylesheet" href="/public/css/ojm.css" />
                <link rel="icon" type="image/png" href="/public/images/favicon.png" />
            </head>
            <body>
                <span id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></span>
            </body>
            <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
            <script src={'/public/js/' + this.props.clientFile}></script>
            </html>
        );
    }
});

module.exports = Html;
