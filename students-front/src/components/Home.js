import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";

import axios from "axios";

import { API_URL } from "../constants";
//
//class ErrorBoundary extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = { hasError: false };
//  }
//
//  static getDerivedStateFromError(error) {
//    // Update state so the next render will show the fallback UI.
//    return { hasError: true };
//  }
//
//  componentDidCatch(error, info) {
//    // Example "componentStack":
//    //   in ComponentThatThrows (created by App)
//    //   in ErrorBoundary (created by App)
//    //   in div (created by App)
//    //   in App
//    logErrorToMyService(error, info.componentStack);
//  }
//
//  render() {
//    if (this.state.hasError) {
//      // You can render any custom fallback UI
//      return this.props.fallback;
//    }
//
//    return this.props.children;
//  }
//}

class Home extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URL).then(res => this.setState({ students: res.data }));
  };

  resetState = () => {
    this.getStudents();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
                <StudentList
                students={this.state.students}
                resetState={this.resetState}
                />
      </Container>
    );
  }
}

export default Home;
