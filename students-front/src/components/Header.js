import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.saaspegasus.com%2Fguides%2Fmodern-javascript-for-django-developers%2Fintegrating-django-react%2F&psig=AOvVaw3iKYOlmP9jG639olK13sx2&ust=1703238230000000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiCyP-eoIMDFQAAAAAdAAAAABAD"
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
