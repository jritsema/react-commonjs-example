var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return { count: 0 }
  },
  increment: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  decrement: function() {
    this.setState({
      count: this.state.count - 1
    });
  },        
  render: function() {
    return (
      <div className="Counter">
        <h1>Count: { this.state.count }</h1>
        <button type="button" onClick={ this.increment }>Increment</button>
        <button type="button" onClick={ this.decrement }>Decrement</button>
      </div>
    );
  }
});