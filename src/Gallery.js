import React, { Component } from "react";
import InstaGrid from "./InstaGrid.js";
 
class Gallery extends Component {
  render() {
    return (
      <div className="Instafeed">
        <InstaGrid account="the_cookie_barne" numberOfMediaElements={9}/>
      </div>
    );
  }
}
 
export default Gallery;