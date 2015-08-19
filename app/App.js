/** @jsx React.DOM */
var React = require('react');

var DisplayWeather = React.createClass({
    getWeather: function() {
        var temp = 0.0;
        //Weather.getCurrent("Berkeley", function(current) {
        //    temp = current.temperature();
        //});
        return temp;
    },
    render: function() {
        return (
            <div>
              <p>{this.getWeather()}</p>
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
