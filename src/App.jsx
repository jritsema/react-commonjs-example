var React = require('react');
var Profile = require('./profile.jsx');

React.render(
  <Profile
    username="Simon"
    bio="My name is Simon. I make websites"
    avatar="http://simonsmith.io/assets/images/me.jpg"
  />,
  document.body
);