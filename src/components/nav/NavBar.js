import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/NavBar.css';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      showMenu: "nav navcollaps",
      };
    }	
    clickLogoButton = () => {
      if ( this.state.showMenu ===  "nav navcollaps") {
        this.setState({showMenu: "nav navcollaps show"});
      }
      else{
        this.setState({showMenu: "nav navcollaps"});
      }
    }
    render() {
      return (
        <div className="navbar">
          <div className="contaier">

            <div className="navbar-header">
              <button className="toggle" onClick={this.clickLogoButton}><span></span>
              <span></span>
              <span></span></button>
             <Link to="/about" className="navbar-brand">Neighborhood Association</Link>
            </div>

            <ul className={this.state.showMenu}>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/news">Ivy City News</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>

        </div>
      </div>
    );
  }
}



export default NavBar;
