var React = require('react');
var blogMap = require('../../posts/blogMap');
var PostStore = require('../../stores/PostStore');
var connectToStores = require('fluxible/addons/connectToStores');

var Post = React.createClass({
    render: function() {
        // Hack: Why is the store not populating?
        var content = (<div></div>)
        if (this.props.component) {
            var Component = this.props.component;
            content = (
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
        return content;
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