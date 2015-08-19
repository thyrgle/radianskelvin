/** @jsx React.DOM */
var React = require('react');

var DisplayWeather = React.createClass({
    render: function() {
        return (
            <div>
              <p>Testing</p>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
              <h1>Radians Kelvin</h1>
              <p>Today it is:</p>
              <DisplayWeather />
            </div>
        );
    }	
});
	
module.exports = App;
