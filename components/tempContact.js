var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="blogCentered" style={{padding: "20px"}}>
                <h1>Contact</h1>
                <p>
                    <strong>Email:</strong> <a href="mailto:jaxoncreed@gmail.com" target="_top">jaxoncreed@gmail.com</a>
                </p>
                <p>
                    <strong>Phone:</strong> 678-699-9704
                </p>
                <p>
                    <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/jacksoncmorgan" target="_blank">linkedin.com/in/jacksoncmorgan</a>
                </p>
                <p>
                    <strong>Find a time to meet me:</strong> <a href="https://www.google.com/calendar/embed?mode=WEEK&height=600&wkst=1&bgcolor=%23FFFFFF&src=jaxoncreed%40gmail.com&color=%2329527A&src=cucgmo808e9757bkl2sd51t478%40group.calendar.google.com&color=%23B1440E" target="_blank">Check out my Schedule</a>
                </p>
            </div>
        );
    }
});

module.exports = Home;