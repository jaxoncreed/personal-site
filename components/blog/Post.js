var React = require('react');
var blogMap = require('../../posts/blogMap');
var PostStore = require('../../stores/PostStore');
var NavLink = require('fluxible-router').NavLink;
var connectToStores = require("fluxible-addons-react").connectToStores;

var Post = React.createClass({
    render: function() {
        return (
            <article className="blogPostContainer">
                <header className="blogPostHeader">
                    <div className="blogCenter">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.summary}</p>
                    </div>
                </header>
                <div className="blogCenter blogContent" dangerouslySetInnerHTML={{__html: this.props.html}}></div>
                <NavLink href="/contact">
                    <div className="o-circle-button bottom-right">
                        <span style={{textAlign: "center", fontSize: "90%"}}>Comments & Questions</span>
                    </div>
                </NavLink>
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