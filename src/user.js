import React from "react";
import { Link } from 'react-router-dom'
var createReactClass = require('create-react-class');
//import { browserHistory } from "react-router";
import { createBrowserHistory } from 'history'
export class User extends React.Component {

  constructor(props){
    super(props);

  }

  // onNavigateHome() {
  //  this.props.history.push("/");
  // }

  render() {

    return (
            <div >
              <Header />
              <h3>The User Page</h3>
              <p>User ID: {this.props.match.params.id}</p>

              </div>
        );
    }
  }
  const Header = () => (
    <header>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/'>Home</Link></li>
      </ul>
    </header>
  )

// var User = createReactClass({
//     render: function(){
//         return(
//           <div>
//             <Header />
//             <h3>The User Page</h3>
//             <p>User ID: </p>
//           </div>
//         );
//     }
// });
//
// module.exports = User;
