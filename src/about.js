var React = require('react');
var createReactClass = require('create-react-class');
import { Link } from 'react-router-dom'
import { User } from './user'
const Header = () => (
  <header>
    <ul>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/user/10'>User</Link></li>
      <li><Link to='/'>Home</Link></li>
    </ul>
  </header>
)

var About = createReactClass({
  render: function(){
      return(
        <div>
        <Header/>
         <h2>All about me</h2>
        </div>
      );
  }
});

module.exports = About;
