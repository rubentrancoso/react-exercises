var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName= 'Ruben';
var myMessage='This is a message from props';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
