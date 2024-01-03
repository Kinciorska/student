import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";

//import App from './App';
import Header from './components/Header';
import NewStudentForm from './components/NewStudentForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <NewStudentForm />
  </React.StrictMode>
);