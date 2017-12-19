import React from 'react';

// import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import '../../styles/NavBar.css';

// const OuterNav = styled.div `
//   text-align: center;
//   display:flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
// `;

// const Ul = styled.ul `
//   list-style: none;
//   margin: 0;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   height: 100%;
// `;

// const Li = styled.li`
//   padding: 1em 0;
//   height: 100%;

//   > a {
//     padding: 1em;
//     text-decoration: none;
//     color: #f2f2f2;

//     &:hover {
//       background-color: #00c2bb;
//     }
//   }
// `;

// const Logo = styled.a`
//   > a {
//     text-decoration: none;
//     color: #00c2bb;

//     &:hover {
//       color: #f2f2f2;
//     }
//   }
// `


  // <li className={this.props.index === 
  //   this.props.activeIndex ? "current-slide current-slide-active" : "current-slide"}>

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
           <div class="navbar">
            <div class="contaier">

              <div class="navbar-header">
                <button class="toggle" onClick={this.clickLogoButton}><span></span>
                <span></span>
                <span></span></button>
               <Link to="/about"><a href="" class="navbar-brand">Neighborhood Association</a></Link>

              </div>

                <ul class={this.state.showMenu}>
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


// const NavBar = () => (
//   <div>
//     <OuterNav>
//       <nav className="navbar">
//         <Logo><Link to="/about">Neighborhood Association</Link></Logo>
//         <Ul>
//           <Li><Link to="/about">About</Link></Li>
//           <Li><Link to="/community">Community</Link></Li>
//           <Li><Link to="/news">Ivy City News</Link></Li>
//           <Li><Link to="/events">Events</Link></Li>
//           <Li><Link to="/donate">Donate</Link></Li>
//         </Ul>
//       </nav>
//     </OuterNav>
//     <NewNavBar />
//   </div>
// );




export default NavBar;
