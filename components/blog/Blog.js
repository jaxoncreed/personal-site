var React = require('react');
var blogMap = require('../../posts/blogMap');
var NavLink = require('fluxible-router').NavLink;

var Blog = React.createClass({
    render: function() {
        return (
            <div>
                {Object.keys(blogMap).map(function(key) {
                    return (
                        <NavLink href={"/blog/" + key}>
                            <div key={key}>
                                <h1>{blogMap[key].title}</h1>
                                <p>{blogMap[key].summary}</p>
                            </div>
                        </NavLink>
                    )
                })}
            </div>
        );
    }
});

module.exports = Blog;