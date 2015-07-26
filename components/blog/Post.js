var React = require('react');
var blogMap = require('../../posts/blogMap');
var PostStore = require('../../stores/PostStore');
var connectToStores = require('fluxible/addons/connectToStores');

var Post = React.createClass({
    render: function() {
        var Component = this.props.component
        return (
            <div>
                <h1>Post</h1>
                <Component />
            </div>
        );
    }
});

module.exports = connectToStores(
    Post,
    [PostStore],
    {
        PostStore: function (store) {
            console.log("here");
            return {
                component: store.getComponent()
            };
        },
    }
);