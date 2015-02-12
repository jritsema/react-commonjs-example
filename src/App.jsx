var React = require('react');
var Profile = require('./profile.jsx');

React.render(
  <Profile
    username="jritsema"
    bio="Hello, my name is John"
    avatar="http://www.gravatar.com/avatar/561d8607f8e67be182d311fc165567c7.png"
  />,
  document.body
);