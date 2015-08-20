/** @jsx React.DOM */
var React = require('react');
var $ = require('jQuery');

var DisplayWeather = React.createClass({
    toRadians: function(num) {
        return num / 180;
    },
    render: function() {
        return (
            <div>
              <p><span id="temp">{this.toRadians(this.props.data.main.temp).toFixed(2)}&pi;</span>
              <span id="unit">rads Kelvin</span></p>
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() {
        return {data: {main:{temp: 0.0}}};
    },
    componentDidMount: function() {
        var url = 'http://api.openweathermap.org/data/2.5/weather';
        $.ajax({
            dataType: "jsonp",
            url: url,
            jsonCallback: 'jsonp',
            data: { q: "San Diego"},
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this)
        });
    },
    render: function() {
        return (
            <div>
              <h1>Radians Kelvin</h1>
              <p>Today it is:</p>
              <DisplayWeather data={this.state.data} />
            </div>
        );
    }	
});
	
module.exports = App;
