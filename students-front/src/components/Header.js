import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://www.saaspegasus.com/static/images/web/modern-javascript/django-react-header.51a983c82dcb.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
          alt="django + react logo"
        />
        <hr />
        <h1>My test App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
