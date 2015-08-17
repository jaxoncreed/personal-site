var React = require('react');
var blogMap = require('../../posts/blogMap');
var PostStore = require('../../stores/PostStore');
var connectToStores = require("fluxible-addons-react").connectToStores;

var Post = React.createClass({
    render: function() {
        // Hack: Why is the store not populating?
        return (
            <article className="blogPostContainer">
                <div className="blogBackgroundDiv"></div>
                <header className="blogPostHeader">
                    <div className="blogCenter">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.summary}</p>
                    </div>
                </header>
                <span dangerouslySetInnerHTML={{__html: this.props.html}}></span>
            </article>
        );
    }
});

module.exports = connectToStores(
    Post,
    [PostStore],
    function (context, props) {
        return {
            html: context.getStore(PostStore).getHtml(),
            title: context.getStore(PostStore).getTitle(),
            summary: context.getStore(PostStore).getSummary()
        }
    }
);