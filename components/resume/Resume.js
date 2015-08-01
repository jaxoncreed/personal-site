var React = require('react');

var Resume = React.createClass({
    render: function() {

        return (
            <div>
                <a href="/public/files/Resume.pdf" download>
                    <div className="o-circle-button bottom-right">
                        Download
                    </div>
                </a>
                <div className="resume-container">
                    <object className="resume-object" height="1035" width="800" data="/public/files/Resume.pdf"></object>
                </div>
            </div>
        );
    }
});

module.exports = Resume;