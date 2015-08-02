var React = require('react');
var blogMap = require('../../posts/blogMap');
var NavLink = require('fluxible-router').NavLink;

var Blog = React.createClass({
    render: function() {
        console.log(blogMap);
        return (
            <div className="blogContainer">
                {Object.keys(blogMap).map(function(key) {
                    return (
                        <NavLink href={"/blog/" + key} key={key}>
                            <div className="blogListItem">
                                <div className="blogCenter">
                                    <h1>{blogMap[key].title}</h1>
                                    <p>{blogMap[key].summary}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        );
    }
});

module.exports = Blog;