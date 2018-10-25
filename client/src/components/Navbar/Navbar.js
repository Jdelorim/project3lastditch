import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {

   

    render(){
        return(
            <nav>
            <div className="nav-wrapper teal accent-4">
            <div className="container">

              <a href="/UserInventory" className="brand-logo right">Inventory</a>
                <ul id="nav-mobile" className="left hide-on-small-only ">
                    <li><a className="waves-effect waves-light btn" href="/UserInventory">Inventory</a></li>
                    <li><a className="waves-effect waves-light btn" href="/AddItem">Add Item</a></li>
                    
                    <li><a className="waves-effect waves-light btn" href="/Login">Login</a></li>
                </ul>


              </div>
            </div>
          </nav>
        )
    }
}

export default Navbar;