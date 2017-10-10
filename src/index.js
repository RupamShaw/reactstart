var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
//https://www.ctheu.com/2015/02/12/how-to-communicate-between-react-components/

// the parent
var MyContainer = createReactClass({
    getInitialState: function() {
        //return { checked: false };
        return { checked: false, totalChecked: 0 };

//return { default: false, totalChecked: 0 };
    },
    // onChildChanged: function(newState) {
    //     this.setState({ checked: newState });
    // },
    onChildChanged: function(newState) {
     // if newState is true, it means a checkbox has been checked otherwise unchecked
     var newTotal = this.state.totalChecked + (newState ? 1 : -1);
     this.setState({ checked: newState });
     this.setState({ totalChecked: newTotal });
   },
    render: function() {
        return  <div><div >total checked {this.state.totalChecked}</div>
                  <div>Are you checked ? {this.state.checked ? 'yes' : 'no'}</div>
                  <ToggleButton text="Toggle me"
                                initialChecked={this.state.checked}
                                callbackParent={this.onChildChanged} />
                                <ToggleButton text="Toggle me too" initialChecked={this.state.checked}
                                                    callbackParent={this.onChildChanged} />
                 <ToggleButton text="And me" initialChecked={this.state.checked}
                                             callbackParent={this.onChildChanged} />
                </div>;
    }
});

// the child
var ToggleButton = createReactClass({
  getInitialState: function() {
    // we set our initial state from our props
    return { checked: this.props.initialChecked };
  },
  onTextChanged: function() {
    var newState = !this.state.checked;
    this.setState({ checked: newState }); // we update our state
    this.props.callbackParent(newState); // we notify our parent
  },
  render: function() {
    return <label>{this.props.text}: <input type="checkbox"
                                            checked={this.state.checked}
                                            onChange={this.onTextChanged}/></label>;
  }
});
ReactDOM.render(<MyContainer />, document.getElementById('todo-wrapper'))
