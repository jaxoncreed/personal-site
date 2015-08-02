var React = require('react');
var blogMap = require('../../posts/blogMap');
var PostStore = require('../../stores/PostStore');
var connectToStores = require('fluxible/addons/connectToStores');

var Post = React.createClass({
    render: function() {
        var Component = this.props.component;
        return (
            <article className="blogPostContainer">
                <div className="blogBackgroundDiv"></div>
                <header className="blogPostHeader">
                    <div className="blogCenter">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.summary}</p>
                    </div>
                </header>
                <Component />
            </article>
        );
    }
});

module.exports = connectToStores(
    Post,
    [PostStore],
    {
        PostStore: function (store) {
            return {
                component: store.getComponent(),
                title: store.getTitle(),
                summary: store.getSummary()
            };
        },
    }
);