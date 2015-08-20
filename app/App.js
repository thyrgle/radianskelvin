/** @jsx React.DOM */
var React = require('react');
var $ = require('jQuery');

var DisplayTemp = React.createClass({
    toRadians: function(num) {
        return num / 180;
    },
    render: function() {
        return (
            <div>
              <p>Today it is:</p>
              <p><span id="temp">{this.toRadians(this.props.data.main.temp).toFixed(2)}&pi;</span>
              <span id="unit">rads Kelvin</span></p>
            </div>
        );
    }
});

var DisplayClimate = React.createClass({
    render: function() {
        return (
                <div>
                  <svg width="300" height="350">
                    <circle id="sun" r="30" cx="50" cy="50" fill="yellow" />
                  </svg>
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
              <div class="container">
                <DisplayClimate />
                <DisplayTemp data={this.state.data} />
              </div>
            </div>
        );
    }	
});
	
module.exports = App;
