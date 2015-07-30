var React = require('react');

var CircleButton = React.createClass({
    propTypes: {
        action: React.PropTypes.func.isRequired,
        payload: React.PropTypes.object.isRequired
    },
    contextTypes: {  
        executeAction: React.PropTypes.func.isRequired,
    }, 
    navigate: function() {
        console.log("payload");
        console.log(this.props.payload);
        this.context.executeAction(this.props.action, this.props.payload);
    },
    render: function() {
        var loading;
        if (true) {
            loading = "Loading";
        }
        return (
            <div className="o-circle-button" onClick={this.navigate}>
                {this.props.children} {loading}
            </div>
        );
    }
});

module.exports = CircleButton;