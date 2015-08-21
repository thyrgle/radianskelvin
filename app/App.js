/** @jsx React.DOM */
var React = require('react');
var $ = require('jQuery');

var DisplayTemp = React.createClass({
    toRadians: function(num) {
        return num / 180;
    },
    render: function() {
        var right = {
            display: 'inline-block',
            height: '350px',
            verticalAlign: 'top'
        }
        return (
            <div style={right}>
              <p>Today it is:</p>
              <p><span id="temp">{this.toRadians(this.props.data.main.temp).toFixed(2)}&pi;</span>
              <span id="unit">rads Kelvin</span></p>
            </div>
        );
    }
});

var DisplayClimate = React.createClass({
    render: function() {
        var left = {
            display: 'inline-block',
            height: '350px'
        }
        return (
                <div style={left}>
                  <svg width="300" height="350">
                    <circle id="sun" r="50" cx="150" cy="125" fill="yellow" />
                    <polygon points="150,63.4 100,150 200,150" fill="red" />
                  </svg>
                </div>
               );
    }
});

var City = React.createClass({
    render: function() {
        var input = {
            outline: 'none',
            lineHeight: '36px',
            width: '175px',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: '0',
            borderBottom: '2px solid white',
            fontSize: '24px'
        };
        return ( 
                <div>
                  <input style={input} type="text" />
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
              <div>
                <DisplayClimate />
                <DisplayTemp data={this.state.data} />
              </div>
              <div>
                <City />
              </div>
            </div>
        );
    }	
});
	
module.exports = App;
